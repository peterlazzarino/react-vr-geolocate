import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  AmbientLight,
  Image,
  View,
} from 'react-vr';
import Earth from "./components/earth/earth";
import Marker from "./components/locationMarker/marker";

export default class world_explorer extends React.Component {
  constructor(){
    super();
    this.earthRadius = 1.5;
    this.locationItems = [
      { 
        coordinates: { lat: 40.7128, lon: -74.0060 },
        component: <Marker />
      },{ 
        coordinates: { lat: 40.7128, lon: -52.0060 },
        component: <Marker />
      },{ 
        coordinates: { lat: 40.7128, lon: -34.0060 },
        component: <Marker />
      }
    ]
  }
  render() {
    const earthRadius = 1.5;
    return (
      <View> 
        <View
          style={{
            transform: [
              {translate: [0,0,-4]}
            ]
          }}
        >
          <Earth 
            locationMarkerStyle={{color: "black"}}
            locationContent={this.locationItems} 
            scale={earthRadius} 
          />
        </View>
        <Pano source={asset('star_bg.jpg')}/> 
        <AmbientLight intensity={1.2} decay={100} />        
      </View>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
