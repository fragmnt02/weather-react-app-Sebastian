import React, { Component } from 'react';
import Navigator from './Navigator';
import Currently from './Currently';
import Daily from './Daily';
import Hourly from './Hourly';

class WeatherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'Currently'
        }
    }

    setCurrent = (event, current) => {
        this.setState({ current });
    };

    render() {
        const { current } = this.state;
        const { currently, hourly, daily, requested, loading } = this.props;
        const propsNavigator = {
            current,
            setCurrent: this.setCurrent
        }
        const propsCurrently = {
            current,
            ...currently
        }
        const propsHourly = {
            current,
            ...hourly
        }
        const propsDaily = {
            current,
            ...daily
        }

        if (requested && !loading) {
            return (
                <React.Fragment>
                    <Navigator {...propsNavigator} />
                    <Currently {...propsCurrently} />
                    <Hourly {...propsHourly} />
                    <Daily {...propsDaily} />
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}

export default WeatherContainer;