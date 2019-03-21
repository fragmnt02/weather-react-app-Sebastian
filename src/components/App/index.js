import React, { Component } from 'react';
import { Container, ContainerLoading, Title } from './App.style';
import { createGlobalStyle } from 'styled-components'
import Form from '../Form';
import WeatherContainer from '../WeatherContainer';
import gql from "graphql-tag";
import { withApollo } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
const GET_WEATHER = gql`
query($lat:String!, $long:String!){
  getWeather(lat:$lat, long:$long){
    currently{
      time,
      summary,
      temperature,
      icon
    },
    hourly{
      summary,
      icon,
      data{
        time,
        summary,
        temperature,
        icon
    	}
    },
    daily{
      summary,
      icon,
      data{
        time,
        summary,
        temperatureMin,
        temperatureMax,
        icon
    	}
    }
  }
}
`
const GlobalStyle = createGlobalStyle`
  body {
    text-align:center;
    padding:0;
    margin:0;
    background-image:url(https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);
    background-repeat:no-repeat;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
      loading: false,
      hourly: {
        data: []
      },
      daily: {
        data: []
      },
      requested: false
    }
  }

  setCoords = (lat, long) => this.setState({ lat, long }, this.getWeather)

  setLoading = (loading, callback) => this.setState({ loading }, callback)

  getWeather = () => {
    const { lat, long } = this.state;
    const { client } = this.props;
    client.query({
      query: GET_WEATHER,
      variables: {
        lat,
        long
      }
    })
      .then(res => {
        const { currently, daily, hourly } = res.data.getWeather;
        this.setState({ loading: false, currently, daily, hourly, requested: true })
      })
      .catch(error => alert(error.message))
  }

  render() {
    const { currently, daily, hourly, loading, requested } = this.state;
    const propsForm = {
      setCoords: this.setCoords,
      setLoading: this.setLoading
    }

    const propsContainer = {
      currently,
      daily,
      hourly,
      requested,
      loading
    }

    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Title>React Weather App - Francisco</Title>
          <Form {...propsForm} />
          {
            loading
              ?
              <ContainerLoading>
                <CircularProgress color="secondary" />
              </ContainerLoading>
              :
              null
          }
          <WeatherContainer {...propsContainer} />
        </Container>
      </React.Fragment>
    );
  }
}

export default withApollo(App);
