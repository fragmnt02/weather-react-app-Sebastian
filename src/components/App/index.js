import React, { Component } from 'react';
import { Container } from './App.style';
import { createGlobalStyle } from 'styled-components'
import Form from '../Form';
import gql from "graphql-tag";
import { withApollo } from 'react-apollo';
const GET_WEATHER = gql`
query($lat:String!, $long:String!){
  getWeather(lat:$lat, long:$long){
    currently{
      summary,
      temperature,
      icon
    },
    hourly{
      summary,
      icon,
      data{
        summary,
        temperature,
        icon
    	}
    },
    daily{
      summary,
      icon,
      data{
        summary,
        temperature,
        icon
    	}
    }
  }
}
`
const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      lat:'',
      long:'',
      loading:false
    }
  }

  setCoords=(lat,long)=>this.setState({lat,long},this.getWeather)

  setLoading=(loading,callback)=>this.setState({loading},callback)

  getWeather=()=>{
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
          console.log(res.data)
          this.setState({loading:false})
      })
      .catch(error => alert(error.message))

  }

  render(){
    const propsForm={
      setCoords:this.setCoords,
      setLoading:this.setLoading
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Form {...propsForm} />
        </Container>
      </React.Fragment>
    );
  }
}

export default withApollo(App);
