import React from "react"

export default function Navbar() {
    return (
        <nav>
            <h2 className="nav--title">Anchorage Aurora Society</h2>
            <div className="nav--search--container">
                <input type="text" title="location" placeholder="Enter a postal code"></input>
				<button className="nav--search" id="submit"><img class="nav--icon" src="./src/assets/location.svg" alt="find my location"/></button> 
            </div>
        </nav>
    )
}