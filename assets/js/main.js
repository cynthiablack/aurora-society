// Default location is Anchorage International Aiport
let latitude = 61.1740847;
let longitude = -149.9981375;
//let locationData = `${latitude},${longitude}`;

// Get Geocode.xyz data
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
       document.querySelector('#location-name').innerText = `${city}, ${state}, ${prov}`;
    })
};