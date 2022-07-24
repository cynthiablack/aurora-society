let latitude;
let longitude;

function getGeoCode(location) {
    const geoCode = `https://geocode.xyz/${location}?json=1`;
    fetch(geoCode)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
       latitude = data.latt;
       longitude = data.longt;
       let city = data.standard.city;
       let state = data.standard.statename;
       let prov = data.standard.prov;
  
       // Print location to DOM
       document.querySelector('#location-name').innerText = `${city}, ${state}, ${prov}`;

       // Store lat / long in local storage
       let coordinates = {
        latitude,
        longitude
       }

        const coordinatesSerialized = JSON.stringify(coordinates);
        localStorage.setItem("coordinates", coordinatesSerialized);
    })
}

// When a button is clicked, set location
document.querySelector('#find-me').addEventListener('click', autoDetect);

function autoDetect() {
    const success = position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        }
    const error = error => {
        console.error(error);
    };
    navigator.geolocation.getCurrentPosition(success, console.error);
}