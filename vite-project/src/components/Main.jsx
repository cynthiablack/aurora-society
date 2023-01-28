import React from "react"
// import Data from "./Data"
import { CircularProgressbar } from 'react-circular-progressbar'; // delete me!

export default function Main() {
    
    return (
        <main>
            <section id="data" className="data--container">
                {/* <Data 
                    percentage={20}
                />
                <Data 
                    percentage={51}
                    color="#ff9200;"
                />
                <Data 
                    percentage={2}
                    color="#6B33D2;"
                />
                <Data 
                    percentage={82}
                    color="#FF0ACE;"
                /> */}
                <div className="data--contents">
                    <CircularProgressbar
                        value={20}
                        text={`${20}%`}
                    />
                    <div className="data--text">
                        <h3>Data Title</h3>
                        <p>Additional Data</p>
                    </div>
                </div>
                <div className="data--contents">
                    <CircularProgressbar
                        value={51}
                        text={`${51}%`}
                        className="CircularProgressbar CircularProgressbar-orange"
                    />
                    <div className="data--text">
                        <h3>Data Title</h3>
                        <p>Additional Data</p>
                    </div>
                </div>
                <div className="data--contents">
                    <CircularProgressbar
                        value={8}
                        text={`${8}%`}
                        className="CircularProgressbar CircularProgressbar-purple"
                    />
                    <div className="data--text">
                        <h3>Data Title</h3>
                        <p>Additional Data</p>
                    </div>
                </div>
                <div className="data--contents">
                    <CircularProgressbar
                        value={85}
                        text={`${85}%`}
                        className="CircularProgressbar CircularProgressbar-pink"
                    />
                    <div className="data--text">
                        <h3>Data Title</h3>
                        <p>Additional Data</p>
                    </div>
                </div>
                {/* <h2>Current Forecast</h2>
                <div className="data--detail">
                    <img src="" alt="" id="aurora-image" />
					<h3>30 Minute Forecast</h3>
                </div>
                <div>
                    <img src="" alt="" id="weather-image" class="icon" />
					<h3>Cloud Cover</h3>
                    <svg className="svg-indicator">
                        <circle className="svg-indicator-track" />
                        <circle className="svg-indicator-indication" />
                    </svg>
					<ul>
						<li id="cloud-cover"></li>
						<li id="visibility"></li>
					</ul>
                </div>
                <div>
                    <img src="" alt="" id="moon-image" class="icon" />
					<h3>Moon Phase</h3>
					<ul>
						<li id="moon-phase"></li>
						<li id="moon-brightness"></li>
						<li id="moonrise"></li>
					</ul>
                </div>
                <div>
                    <img src="images/moon.png" class="icon" />
					<h3>Hours of Darkness</h3>
					<ul>
						<li id="sunset"></li>
						<li id="sunrise"></li>
						<li id="night-length"></li>
					</ul>
                </div> */}
            </section>
            <section id="status">
                <h3 className="location--label">Currently showing data for </h3>
                <h2 id="location-name">Anchorage International Airport, Anchorage, Alaska, USA</h2>
            </section>
        </main>
    )
}