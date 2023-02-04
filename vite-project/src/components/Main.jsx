import React from "react"
import Data from "./Data"
import { CircularProgressbar } from 'react-circular-progressbar'; // delete me!

export default function Main(props) {
    const latitude = props.latitude
    const longitude = props.longitude

    // get space weather data from NOAA
    const [spaceWeather, setSpaceWeather] = React.useState(
        {
            kp: 0,
            auroraMap: "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg"
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
                auroraMap: "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg"
             }))
        }
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
                    value={51}
                    maxValue={100}
                    color="CircularProgressbar-purple"
                />
                <Data 
                    title="title"
                    value={20}
                    maxValue={100}
                    color="CircularProgressbar-orange"
                />
                <Data 
                    title="title"
                    value={51}
                    maxValue={100}
                    color="CircularProgressbar"
                />
            </section>
            <section id="status">
                <h3 className="location--label">Currently showing data for </h3>
                <h2 className="location--name">{props.city}, {props.state || props.province}, {props.country}</h2>
            </section>
        </main>
    )
}