import React from "react"
import Main from "./components/Main"
import './App.css'

export default function App() {
  // get postal code from user
    const [locationData, setLocationData] = React.useState(
        {
            postalCode: "",
            latitude: 61.1713,
            longitude: -149.9912,
            city: "Anchorage International Airport, Anchorage",
            state: "Alaska",
            country: "USA"
        }
    )

    // form handling
    function handleChange(event) {
        setLocationData(prevLocationData => {
            return {
                ...prevLocationData,
                [event.target.name]: event.target.value
            }
        })
    }

    // get location data from Geocode API
    function handleSubmit(event) {
      event.preventDefault()
      fetch(`https://geocode.xyz/${locationData.postalCode}?json=1`)
          .then(res => res.json())
          .then(data => setLocationData(prevLocationData => ({
            ...prevLocationData,
            city: data.standard.city.toLowerCase(),
            state: data.standard.statename,
            country: data.standard.countryname,
            latitude: data.latt,
            longitude: data.longt
          })
      ))
    }

        // get space weather data from NOAA
        const [spaceWeather, setSpaceWeather] = React.useState(
          {
              kp: 0,
          }
      )

      React.useEffect(() => {
        fetch('https://services.swpc.noaa.gov/json/planetary_k_index_1m.json')
            .then(res => res.json())
            .then(data => 
                setSpaceWeather(prevSpaceWeather => ({
                ...prevSpaceWeather,
                kp: data[data.length - 1].kp_index
          })
        ))
     }, [])

     // get earth weather data from WeatherAPI.com
    const [earthWeather, setEarthWeather] = React.useState(
      {
          cloud: 0,
          condition: "",
          moon_phase: "",
          moon_illumination: "",
          sunrise: "",
          sunset: "",
      }
  )

  React.useEffect(() => {
      fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${locationData.latitude},${locationData.longitude}&aqi=no`)
          .then(res => res.json())
          .then(data => setEarthWeather(prevEarthWeather => ({
              ...prevEarthWeather,
              cloud: data.current.cloud,
              condition: data.current.condition.text,
        })
      ))
      .then(fetch(`https://api.weatherapi.com/v1/astronomy.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${locationData.latitude},${locationData.longitude}&aqi=no`)
      .then(res => res.json())
      .then(data => setEarthWeather(prevEarthWeather => ({
        ...prevEarthWeather,
        moon_phase: data.astronomy.astro.moon_phase,
        moon_illumination: data.astronomy.astro.moon_illumination,
        sunrise: data.astronomy.astro.sunrise,
        sunset: data.astronomy.astro.sunset
      })
      ))
      )
   }, [locationData.latitude])

   // Theme Toggling
   const [lightMode, setLightMode] = React.useState(false)
   function toggleTheme(){
    setLightMode(prevMode => !prevMode)
  }

    // component body
    return (
      <>
        <header className={lightMode ? "header-grid light" : "header-grid"}>
          <h2 className="header-title">{!locationData.postalCode ? 'Anchorage Aurora Society' : 'Forecast for ' + locationData.city.slice(0,1).toLocaleUpperCase() + locationData.city.slice(1) + ', ' +  locationData.state + ', ' + locationData.country}<br /></h2>
          <form className="header-form" onSubmit={handleSubmit}>
            <label htmlFor="postalCode" className="header-form-input-label">Enter location</label>
            <div className="input-container">
            <input
              type="text" 
              placeholder="Enter a postal code"
              name="postalCode"
              onChange={handleChange}
              value={locationData.postalCode}
              className="header-form-input"
            />
            <button className={lightMode ? "header-form-button light" : "header-form-button"}>Submit</button> 
            </div>
          </form>
          <div className="toggler-container">
            <div className="toggler">
              <p className="toggler-light">Light</p>
              <div
                className="toggler-slider"
                onClick={toggleTheme}
              >
                <div className="toggler-slider-circle"></div>
              </div>
              <p className="toggler-dark">Dark</p>
            </div>
          </div>
        </header>
        <Main 
          lightMode={lightMode}
          city={locationData.city}
          state={locationData.state}
          country={locationData.country}
          latitude={locationData.latitude}
          longitude={locationData.longitude}
          kp={spaceWeather.kp}
          cloud={earthWeather.cloud}
          condition={earthWeather.condition}
          moon_phase={earthWeather.moon_phase}
          moon_illumination={earthWeather.moon_illumination}
          sunrise={earthWeather.sunrise}
          sunset={earthWeather.sunset}
        />
      </>
    )
}