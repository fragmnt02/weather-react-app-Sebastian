import React from 'react';
import WeatherCard from '../WeatherCard';
import { Container } from './Daily.style'

function Hourly({data, current}){
    if (current==='Daily') {
        return(
            <Container>
                {
                    data.map(
                        (WCard,index)=>{
                            if(index<10) return <WeatherCard noTemp key={index} {...WCard}/>
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