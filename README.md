# Anchorage Aurora Society site
Site allows users to quickly access information about conditions for aurora viewing. Incorporates JSON data from NOAA, WeatherAPI, and GeoCode APIs.

**Link to project:** https://anchorageaurora.netlify.app/

![Site Preview Image](https://github.com/cynthiablack/aurora-society/blob/main/anchorageaurora.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Anchorage Aurora Soceity was built using semantic HTML, responsive CSS, and JavaScript. The site is built for larger screens, then CSS media queries were added to create a mobile-friendlier layout. 

API calls retrieve NOAA space weather aurora images, local weather (cloud cover, visibility ceiling, moon phase and illumination, and sunrise and sunset hours), and geographical coordinates data. API data that is not displayed raw is used to calculate expected hours of darkeness and to choose which weather icons are displayed.

## Optimizations (pending)

- add auto-detect location feature using JavaScript geolocation API
- streamline code to be less repetive
- add KP index calculations & alert function

## Lessons Learned:

Embracing minimum viable product: my initial vision for this site was more ambitious than its current version; I scaled the project down with the philosophy that having a launched site that delivered core features was more important than having a partially-completed, amazing site the lived only on my hard drive.