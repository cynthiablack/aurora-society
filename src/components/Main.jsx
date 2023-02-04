import React from "react"
import Data from "./Data"

// import { CircularProgressbar } from 'react-circular-progressbar'; // delete me!

export default function Main(props) {
    const latitude = props.latitude
    const longitude = props.longitude
    const postalCode = props.postalCode

    // get space weather data from NOAA
    const [spaceWeather, setSpaceWeather] = React.useState(
        {
            kp: 0,
            auroraMap: "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg"
        }
    )
    const [earthWeather, setEarthWeather] = React.useState(
        {
            cloud: 0,
            condition: "",
            moon_phase: "",
            moon_illumination: "",
            sunrise: "",
            sunset: ""
        }
    )

    React.useEffect(() => {
        fetch('https://services.swpc.noaa.gov/json/planetary_k_index_1m.json')
            .then(res => res.json())
            .then(data => setSpaceWeather(prevSpaceWeather => ({
                ...prevSpaceWeather,
                kp: data[data.length - 1].kp_index
          })
        ))
     }, [])

     function hemisphereChecker(latitude) {
        if (latitude < 0) {
             setSpaceWeather(prevSpaceWeather => ({
                ...prevSpaceWeather,
                auroraMap: "https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg"
             }))
        }
    }

    // get earth weather data from WeatherAPI.com
    React.useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`)
            .then(res => res.json())
            .then(data => setEarthWeather(prevEarthWeather => ({
                ...prevEarthWeather,
                cloud: data.current.cloud,
                condition: data.current.condition.text,
          })
        ))
     }, [{postalCode}])

     React.useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=no`)
            .then(res => res.json())
            .then(data => setEarthWeather(prevEarthWeather => ({
                ...prevEarthWeather,
                moon_phase: data.astronomy.astro.moon_phase,
                moon_illumination: data.astronomy.astro.moon_illumination,
                sunrise: Array.from(data.astronomy.astro.sunrise),
                sunset: Array.from(data.astronomy.astro.sunset),
          })
        ))
     }, [{postalCode}])

     // Calculate the time between sunset and sunrise
    function calculateNightLength() {
        let sunsetHour = earthWeather.sunset.slice(0,2).join('')
        let sunsetMinute = earthWeather.sunset.slice(3,5).join('');
        let sunriseHour = earthWeather.sunrise.slice(0,2).join('')
        let sunriseMinute = earthWeather.sunrise.slice(3,5).join('');

        if (earthWeather.sunset.includes('AM')) {
            let elapsedHours = +sunriseHour - 1;
            let elapsedMinutes = ((60 - +sunsetMinute) + (+sunriseMinute));
        } 
        else {
            let elapsedHours = ((12 - +sunsetHour) + (+sunriseHour));
            let elapsedMinutes = ((60 - +sunsetMinute) + (+sunriseMinute));
        }
        return elapsedHours, elapsedMinutes
    }


    return (
        <main>
            <section id="data" className="data--container">
                <div className="aurora--map--container">
                    <img src={spaceWeather.auroraMap}  alt="" className="aurora--map" />
                </div>
                <Data 
                    title="KP Index"
                    additionalData="out of 9"
                    value={spaceWeather.kp}
                    maxValue={9}
                    color="CircularProgressbar-pink"
                />
                <Data
                    title="Cloud Cover"
                    additionalData={`and ${earthWeather.condition.toLowerCase()}`}
                    value={`${earthWeather.cloud}%`}
                    maxValue={100}
                    color="CircularProgressbar"
                />
                <Data 
                    title="Moonlight"
                    value={`${earthWeather.moon_illumination}%`}
                    additionalData={earthWeather.moon_phase}
                    color="CircularProgressbar-orange"
                />
                {/* <Data 
                    title="Night Length"
                    value={elapsedHours}
                    maxValue={12}
                    color="CircularProgressbar-purple"
                /> */}
            </section>
            <section id="status">
                <h3 className="location--label">Currently showing data for </h3>
                <h2 className="location--name">{props.city}, {props.state || props.province}, {props.country}</h2>
            </section>
        </main>
    )
}