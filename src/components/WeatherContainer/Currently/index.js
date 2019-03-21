import React from 'react';
import WeatherCard from '../WeatherCard';

function Currently({ icon, summary, temperature, current, time }){
    
    const props={
        time,
        icon, 
        summary, 
        temperature
    }
    if(current==='Currently'){
        return(
            <WeatherCard {...props} />
        );
    }else{
        return null;
    }
    
}
export default Currently;