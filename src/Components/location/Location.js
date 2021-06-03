import { GoogleComponent } from './GoogleComponent' ;


import React, { Component } from 'react';



const API_KEY = "AIzaSyDQ_m-lB4HKyRedZxp0UtdcUNtWxHCmc_U"

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          currentCoordinates={{
            "lat": 41.7151377,
            "lng": 44.827096
          }}
          placeholder={'Start typing location'}
        //   locationBoxStyle={'custom-style'}
        //   locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  } 
}


export default Location;