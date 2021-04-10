import React, { Component } from 'react'
import { Map, GoogleApiWrapper, GoogleAPI, Marker } from 'google-maps-react'

const mapStyles = {
    width: '314px',
    height: '403px',
    'margin-top': '125px'
}

export class MapContainer extends Component<GoogleAPI,{lat:number, lng:number}> {

  render () {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
      >
        <Marker/>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAeiDcrIjBzOCHSjPGKmIhck5wfzJUxS44'
  })(MapContainer);