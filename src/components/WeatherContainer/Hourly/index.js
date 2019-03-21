import React from 'react';
import WeatherCard from '../WeatherCard';
import { Container } from './Hourly.style'

function Hourly({data, current}){
    if (current==='Hourly') {
        return(
            <Container>
                {
                    data.map(
                        (WCard,index)=>{
                            if(index<10) return <WeatherCard key={index} {...WCard}/>
                        }
                    )
                }
            </Container>
        );
    } else {
        return null;
    }
}
export default Hourly;