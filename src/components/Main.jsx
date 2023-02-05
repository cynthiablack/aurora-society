import React from "react"
import Data from "./Data"
import PercentageData from "./PercentageData"

export default function Main(props) {
    const latitude = props.latitude
    const longitude = props.longitude

    return (
        <main>
            <section id="data" className="data--container">
                <div className="aurora--map--container">
                    <img 
                        src={latitude < 0 ? "https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg" : "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg"}  
                        alt="" 
                        className="aurora--map" 
                    />
                </div>
                <Data 
                    title="KP Index"
                    additionalData="out of 9"
                    value={props.kp}
                    maxValue={9}
                    color="CircularProgressbar-pink"
                />
                <PercentageData
                    title="Cloud Cover"
                    additionalData={`and ${props.condition}`}
                    value={props.cloud}
                    color="CircularProgressbar"
                />
                <PercentageData 
                    title="Moonlight"
                    value={`${props.moon_illumination}`}
                    additionalData={props.moon_phase}
                    color="CircularProgressbar-orange"
                />
                {/* <Data 
                    title="Night Length"
                    value={earthWeather.sunrise}
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