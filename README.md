# Anchorage Aurora Society site
Site allows users to quickly access information about conditions for aurora viewing. Incorporates JSON data from NOAA, WeatherAPI, and GeoCode APIs.

**Link to project:** https://anchorageaurora.netlify.app/

![Site Preview Image](https://github.com/cynthiablack/aurora-society/blob/main/anchorageaurora.png)

## How It's Made:


**Tech used:** HTML, CSS, JavaScript, React

Anchorage Aurora Society v2.0 was redesigned with a focus on the mobile user experience. Rebuilt in 2023 as a mobile-first React site, v2.0 focuses on loading speed, streamlined UI, and a dark-mode-first approach, since Aurora hunting generally happens at night and the previous, light-colored theme could be jarring to use.

To speed up loadtimes, tooling like Vite and Font Source are used to bundle assets.

API calls retrieve NOAA space weather aurora images, local weather (cloud cover, visibility ceiling, moon phase and illumination, and sunrise and sunset hours), and geographical coordinates data. API data that is not displayed raw is used to calculate expected hours of darkeness and to choose which weather icons are displayed.

## Optimizations (pending)

- add auto-detect location feature using JavaScript geolocation API
- streamline code to be less repetive
- add KP index calculations & alert function

## Lessons Learned:

Version 1:
Embracing minimum viable product: my initial vision for this site was more ambitious than its current version; I scaled the project down with the philosophy that having a launched site that delivered core features was more important than having a partially-completed, amazing site the lived only on my hard drive.

Version 2:
More time spent thinking through the user experience likely would have led me to a mobile-first, dark-theme approach for the initial relase.