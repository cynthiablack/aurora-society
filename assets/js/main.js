document.addEventListener('DOMContentLoaded', getWeather);
document.addEventListener('DOMContentLoaded', getAstronomy);
// Default location is Anchorage International Aiport

// Show Northern Hemisphere aurora forecast
document.querySelector('#aurora-image').src = 'https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg';

            // Update sky cover data based on new location
            function getWeather() {
              const weather = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=61.1713,-149.9912&aqi=no`;

              fetch(weather)
              .then(res => res.json()) // parse response as JSON
              .then(data => {

                // Put cloud cover data in DOM
                document.querySelector('#cloud-cover').innerText = `${data.current.cloud}%`;
                document.querySelector(`#visibility`).innerText = `Visibility: ${data.current.visibility} miles`;

              // Put relevant weather photos in DOM
                if (data.current.condition.text.includes('rain')) {
                  document.querySelector('#weather-image').src = 'images/raining.png';
                }
                else if (data.current.condition.text.includes('snow')) {
                  document.querySelector('#weather-image').src = 'images/snowing.png';
                }
                else if (data.current.condition.text.includes('overcast')) {
                  document.querySelector('#weather-image').src = 'images/clouds.png';
                }
                else if (data.current.condition.text.includes('sunny')) {
                  document.querySelector('#weather-image').src = 'images/sun.png';
                  }
              })
              .catch(err => {
                console.log(`Weather error ${err}`)
              })
            }

            // Get moon phase
            function getAstronomy() {
              const today = new Date();
              const userEntry = document.querySelector('input').value;
              const astronomy = `http://api.weatherapi.com/v1/astronomy.json?key=${WEATHER_API_KEY}&q=61.1713,-149.9912&dt=${today}`

              fetch(astronomy)
              .then(res => res.json()) // parse response as JSON
              .then(data => {

                // Put moon phase in DOM
                document.querySelector('#moon-phase').innerText = `${data.astronomy.astro.moon_phase}`
                document.querySelector('#moon-brightness').innerText = `Illumination: ${data.astronomy.astro.moon_illumination}%`
                document.querySelector('#moonrise').innerText = `Moonrise: ${data.astronomy.astro.moonrise}`

                // Put relevant moon phase image in DOM
                if (data.astronomy.astro.moon_phase.includes('New')) {
                  document.querySelector('#moon-image').src = 'images/new-moon.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('Waxing Crescent')) {
                  document.querySelector('#moon-image').src = 'images/waxing-crescent.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('First')) {
                  document.querySelector('#moon-image').src = 'images/first-quarter.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('Waxing Gibbous')) {
                  document.querySelector('#moon-image').src = 'images/waxing-gibbous.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('Full')) {
                  document.querySelector('#moon-image').src = 'images/full-moon.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('Waning Gibbous')) {
                  document.querySelector('#moon-image').src = 'images/waning-gibbous.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('Third')) {
                  document.querySelector('#moon-image').src = 'images/third-quarter.png';
                }
                else if (data.astronomy.astro.moon_phase.includes('Waning Crescent')) {
                  document.querySelector('#moon-image').src = 'images/waning-crescent.png';
                }

                // Get hours of darkness
                document.querySelector('#sunset').innerText = `${data.astronomy.astro.sunset}`
                document.querySelector('#sunrise').innerText = `${data.astronomy.astro.sunrise}`

                // Calculate the time between sunset and sunrise
                let sunset = Array.from(data.astronomy.astro.sunset);
                let sunsetHour = sunset.slice(0,2).join('')
                let sunsetMinute = sunset.slice(3,5).join('');

                let sunrise = Array.from(data.astronomy.astro.sunrise);
                let sunriseHour = sunrise.slice(0,2).join('')
                let sunriseMinute = sunrise.slice(3,5).join('');

                 if (data.astronomy.astro.sunset.includes('AM')) {
                  let elapsedHours = +sunriseHour - 1;
                  let elapsedMinutes = ((60 - +sunsetMinute) + (+sunriseMinute));
                  document.querySelector('#night-length').innerText = `${elapsedHours} hr : ${elapsedMinutes} min`
                } 
                else {
                  let elapsedHours = ((12 - +sunsetHour) + (+sunriseHour));
                  let elapsedMinutes = ((60 - +sunsetMinute) + (+sunriseMinute));
                  document.querySelector('#night-length').innerText = `${elapsedHours} hr : ${elapsedMinutes} min`
                }
              })
              .catch(err => {
                console.log(`Astronomy error ${err}`)
              })
            }