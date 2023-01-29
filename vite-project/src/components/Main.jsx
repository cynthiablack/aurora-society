import React from "react"
import Data from "./Data"
import { CircularProgressbar } from 'react-circular-progressbar'; // delete me!

export default function Main() {
    
    return (
        <main>
            <section id="data" className="data--container">
                <Data 
                    percentage={20}
                    color="CircularProgressbar"
                />
                <Data 
                    percentage={51}
                    color="CircularProgressbar CircularProgressbar-purple"
                />
                <Data 
                    percentage={51}
                    color="CircularProgressbar CircularProgressbar-orange"
                />
                <Data 
                    percentage={51}
                    color="CircularProgressbar-pink"
                />
            </section>
            <section id="status">
                <h3 className="location--label">Currently showing data for </h3>
                <h2 id="location-name">Anchorage International Airport, Anchorage, Alaska, USA</h2>
            </section>
        </main>
    )
}