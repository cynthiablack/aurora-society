// Default location is Anchorage International Aiport
//let latitude = 61.1740847;
//let longitude = -149.9981375;

// When a button is clicked, set location
document.querySelector('#find-me').addEventListener('click', autoDetect);
document.querySelector('#submit').addEventListener('click', userLocation);

function autoDetect() {
    const success = position => {
        let coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        let coordinates_serialized = JSON.stringify(coordinates);

    localStorage.setItem("coordinates", coordinates_serialized);
    console.log(coordinates_serialized);
    };
    const error = error => {
        console.error(error);
    };
    navigator.geolocation.getCurrentPosition(success, console.error)
}

function userLocation() {
    console.log('submitting')
} 

// Pull lat/long from user storage
let coordinates_deserializied = JSON.parse(localStorage.getItem("coordinates"));
console.log(coordinates.latitude);

/*
function getLocation() {
    const autoDetect = document.getElementById('find me').getAttribute('onclick');
    const userEntry = document.getElementById('submit').getAttribute("onclick");
    if (autoDetect === true) {
        console.log('Finding')
    }
    else {
        console.log('Submitting')
    }
*/
    
//        console.log(latitude)
//        console.log(longitude)
//    };

// Return location name to DOM
/*const geoCode = `https://geocode.xyz/${latitude},${longitude}?json=1`;

fetch(geoCode)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let city = data.city;
        let state = data.state;
        let prov = data.prov;

        document.querySelector('#location-name').innerText = `${city}, ${state}, ${prov}`;
    })
*/
// Fetch weather data from NWS
// const weatherData = `https://api.weather.gov/points/${latitude},${longitude}`;
    //console.log(weatherData);
/*
fetch(weatherData)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let city = data.properties.relativeLocation.properties.city;
        let state = data.properties.relativeLocation.properties.state;
        console.log(city, state)
    })
        /*
      if (data.media_type == 'image') {
        document.querySelector('img').src = data.hdurl
      }
      else if (data.media_type == 'video') {
        document.querySelector('iframe').src = data.url
      }
      document.querySelector('#explanation').innerText = data.explanation
      */
/*    .catch(err => {
        console.log(`error ${err}`)
    })
*/
// Show the LED that matches likely Aurora activity


// Fetch geocode
/*
document.querySelector('button').addEventListener('click', getGecode)

function getGecode(){
    const location = document.querySelector('input').value;
    const url = `https://geocode.xyz/?locate=${location}&json=1`;
}
*/
/*

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(url)
        
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#explanation').innerText = data.explanation
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      */



// Fetch Visibility data
    // Sky cover
    // Ceiling height
    // Visibility
    /*
    import geocode from "./apikeys.js"
    document.querySelector('button').addEventListener('click', getFetch)
    
    
    function getFetch(){
      const choice = document.querySelector('input').value
      const url = `https://api.nasa.gov/planetary/apod?api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF&date=${choice}`
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            if (data.media_type == 'image') {
              document.querySelector('img').src = data.hdurl
            }
            else if (data.media_type == 'video') {
              document.querySelector('iframe').src = data.url
            }
            document.querySelector('#explanation').innerText = data.explanation
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    }
*./
// Fetch moon phase
/*
import geocode from "./apikeys.js"
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF&date=${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
// Fetch night length
/*
import geocode from "./apikeys.js"
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF&date=${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
// Fetch 30-minute forecast
/*
import geocode from "./apikeys.js"
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF&date=${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
// Fetch NASA aurora images
/*
import geocode from "./apikeys.js"
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DBwjcbbJSpj4f7gY88ljgf2HJKeD0nC8wGLqBGdF&date=${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
// Fetch an image of each element in the randomDrinkArray
/*
fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${randomDrinkArray[0]}`)
.then(res => res.json())
.then(data => {
    console.log(data.drinks[0])
    //document.querySelector('h2').innerText = data.drinks[0].strDrink;
    document.querySelector('#imageOne').src = data.drinks[0].strDrinkThumb;
    //document.querySelector('h3').innerText = data.drinks[0].strInstructions;
})
.catch(err => {
    console.log(`error${err}`)
})

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
