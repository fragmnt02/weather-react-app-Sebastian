import React from 'react';
import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiSleet, WiWindy, WiFog, WiCloud, WiNightAltCloudy, WiDayCloudy } from 'weather-icons-react';

function WeatherIcon({ icon }) {
    switch (icon) {
        case 'clear-day':
            return  <WiDaySunny size={50} color='#ffdb00' />
        case 'clear-night':
            return <WiNightClear size={50} color='#000000' />
        case 'rain':
            return <WiRain size={50} color='#0085ff' />
        case 'snow':
            return <WiSnow size={50} color='#597996' />
        case 'sleet':
            return <WiSleet size={50} color='#7bcfdb' />
        case 'wind':
            return <WiWindy size={50} color='#b2b2b2' />
        case 'fog':
            return <WiFog size={50} color='#c7c7c7' />
        case 'cloudy':
            return <WiCloud size={50} color='#80aac9' />
        case 'partly-cloudy-day':
            return <WiDayCloudy size={50} color='#799fb2' />
        case 'partly-cloudy-night':
            return <WiNightAltCloudy size={50} color='#7980b2' />
        default:
            return <WiNightAltCloudy size={50} color='#7980b2' />
    }
}
export default WeatherIcon;