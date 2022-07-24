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

