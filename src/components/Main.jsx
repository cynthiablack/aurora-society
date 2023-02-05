import React from "react"
import Data from "./Data"
import PercentageData from "./PercentageData"

export default function Main(props) {
    const latitude = props.latitude
    const longitude = props.longitude
    const getDate = new Date()
    const today = getDate.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" })
    const currentHour = +today.slice(0,2)
    const currentMinutes = +today.slice(3,5)
    const sunriseHour = +props.sunrise.slice(0,2)
    const sunsetHour = +props.sunset.slice(0,2) + 12

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
                <Data 
                    title={+sunsetHour > +currentHour ? 'Sunset In' : 'Sunrise At'}
                    additionalData={+sunsetHour > +currentHour ? props.sunset : props.sunrise}
                    value={`${+sunsetHour > +currentHour ? +currentHour - +sunsetHour : (24 - +currentHour) + +sunriseHour} hrs`}
                    maxValue={(24 - +sunsetHour) + +sunriseHour}
                    color="CircularProgressbar-purple"
                />

            </section>
            <section id="status">
                <h3 className="location--label">Currently showing data for </h3>
                <h2 className="location--name">{props.city}, {props.state || props.province}, {props.country}</h2>
            </section>
        </main>
    )
}