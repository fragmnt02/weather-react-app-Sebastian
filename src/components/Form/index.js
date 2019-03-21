import React, { Component } from 'react';
import { StyledPaper, StyledInput } from './Form.style';
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';
import GpsFixed from '@material-ui/icons/GpsFixed';
import gql from "graphql-tag";
import { withApollo } from 'react-apollo';
const GET_COORDS = gql`
query($query:String!){
    getCoords(query:$query){
      features{
        geometry{
          coordinates
        }
      }
    }
  }
`

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    hadleChage = event => this.setState({ query: event.target.value })

    hanndleEnter = event => {
        if (event.key === 'Enter') this.handleSubmit();
    }

    getGeo=()=>{
        const { setLoading } = this.props;
        setLoading(true,()=>{
            try {
                if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.handleCoords)
            } catch (error) {
                setLoading(false,()=>alert(error));
            }
        })
    }

    handleCoords=position=>{
        const { setCoords } = this.props;
        const lat=`${position.coords.latitude}`;
        const long=`${position.coords.longitude}`;
        setCoords( lat, long );
    }

    handleSubmit = () => {
        const { query } = this.state;
        if (query !== '') {
            const { client, setCoords, setLoading } = this.props;
            setLoading(true,()=>{
                client.query({
                    query: GET_COORDS,
                    variables: {
                        query
                    }
                })
                    .then(res => {
                        const lat = res.data.getCoords.features[0].geometry.coordinates[1]
                        const long = res.data.getCoords.features[0].geometry.coordinates[0]
                        setCoords( lat, long );
                    })
                    .catch(error => setLoading(false,()=>alert(error.message)))
            })
        }
    }

    render() {
        const { query } = this.state;

        const propsInput = {
            onChange: this.hadleChage,
            value: query
        }

        const propsButton = {
            onClick: this.handleSubmit
        }

        const propsPaper = {
            onKeyUp: this.hanndleEnter
        }
        const propsGeo={
            onClick:this.getGeo
        }

        return (
            <React.Fragment>
                <StyledPaper {...propsPaper} >
                    <IconButton {...propsGeo} >
                        <GpsFixed />
                    </IconButton>
                    <StyledInput {...propsInput} />
                    <IconButton {...propsButton} >
                        <Send />
                    </IconButton>
                </StyledPaper>
            </React.Fragment>
        );
    }
}

export default withApollo(Form);
