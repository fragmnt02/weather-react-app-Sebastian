import React from 'react';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from './WeatherIcon';
import { StyledCard, Container } from './WeatherCard.style';

function Weather({ icon, temperature, summary, time, noTemp, temperatureMax, temperatureMin }) {
    const propsIcon={
        icon
    };
    const date = new Date(time*1000)
    return (
        <StyledCard>
            <Typography variant='headline' >{`${date.toDateString()} - ${date.toTimeString()}`}</Typography>
            <WeatherIcon {...propsIcon} />
            {
                noTemp
                ?
                <Container>
                    <Typography >{`Max: ${temperatureMax} ºF`}</Typography>
                    <Typography >{`Min: ${temperatureMin} ºF`}</Typography>
                </Container>
                :
                <Typography variant='headline' >{`${temperature} ºF`}</Typography>
            }
            <Typography  color='textSecondary' >{summary}</Typography>
        </StyledCard>
    );
}
export default Weather;