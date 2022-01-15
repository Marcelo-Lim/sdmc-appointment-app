import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export class MapContainer extends React.Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '50%',
        };
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 14.614244176385009, lng: 121.05514193678349}}
            >
                <Marker position={{ lat: 14.614638344465433, lng: 121.05566594881554}} />    
            </Map>
        )   
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBNuUe0PV2kAOxz6i3J5YY1mo8GLjfHWD8'
})(MapContainer);
