let latitude;
let longitude;
let userEntry;

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
document.querySelector('#submit').addEventListener('click', userLocation);

// Autodectect location
function autoDetect() {
    const success = position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        return latitude;
        return longitude;
        }
    const error = error => {
        console.error(error);
    };
    navigator.geolocation.getCurrentPosition(success, console.error);
}

// Use user-entered location
function userLocation() {
    userEntry = document.querySelector('input').value;
    return userEntry;
}

// Pass location data to get lat / long, location name
if (localStorage.getItem !== null) {
    coordinates = JSON.parse(localStorage.getItem('coordinates'));
    return latitude = coordinates.latitude;
    return longitude = coordinates.longitude;
    getGeoCode(`${latitude}, ${longitude}`)
}
else if (userEntry !== null) {
    getGeoCode(userEntry);
}

// Get sky cover data



// Get moon phase

// Get hours of darkness

// Get 30 minute aurora forecast

// Get relevant photos

// Put everything in the DOM