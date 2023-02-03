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
            stateName: "Alaska",
            provName: "",
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
      console.log("Fetching data")
      fetch(`https://geocode.xyz/${locationData.postalCode}?json=1`)
          .then(res => res.json())
          .then(data => console.log(data))
    }

    // component body
    return (
      <>
        <header>
          <h2 className="header--title">Anchorage Aurora Society</h2>
          <form className="header--search--container" onSubmit={handleSubmit}>
            <input
              type="text" 
              placeholder="Enter a postal code"
              name="postalCode"
              onChange={handleChange}
              value={locationData.postalCode}
            />
            <label htmlFor="postalCode" className="form--input--label">Enter a location</label>
            <button className="form--button">Submit</button> 
          </form>
        </header>
        <Main 
          city={locationData.city}
          state={locationData.stateName}
          province={locationData.provName}
          country={locationData.country}
          latitude={locationData.latitude}
          longitude={locationData.longitude}
        />
      </>
    )
}