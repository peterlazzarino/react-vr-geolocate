import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  AmbientLight,
  Image,
  View,
  VrButton
} from 'react-vr';
import Earth from "react-vr-geolocate";
import Marker from "./components/locationMarker/marker";

const usCities = [
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
];

const europeanCities = [  
    { 
      coordinates: { lat: 48.7128, lon: 2.3522 },
      component: <Marker />
    }
]

export default class world_explorer extends React.Component {
  constructor(){
    super();
    this.earthRadius = 1.5;
    this.locationItems = europeanCities;
    this.selectUS = this.selectUS.bind(this);
    this.selectEurope = this.selectEurope.bind(this);
  }
  selectUS(){
    this.locationItems = usCities;
    this.forceUpdate();
  }
  selectEurope(){
    this.locationItems = europeanCities;
    this.forceUpdate();
  }
  render() {
    const earthRadius = 1.5;
    const buttonStyle = {
      backgroundColor:"black",
      alignItems:"center",
      flex:1,
      paddingLeft:.1,
      marginBottom:.02,
      height:1,
      flexDirection:"row"
    }
    return (
      <View> 
        <View
          style={{
            width:2,
            height:1,
            backgroundColor:"grey",
            padding:.1,
            transform: [
              {translate: [-3.8,1,-4]},
              {rotateY: 25}
            ]
          }}
        >
          <Text>Select an option to load new locations</Text>
          <VrButton style={buttonStyle} onClick={()=>this.selectUS()}>
            <Text>US Cities</Text>
          </VrButton>
          <VrButton style={buttonStyle} onClick={()=>this.selectEurope()}>
            <Text>European Cities</Text>
          </VrButton>
        </View>
        <View
          style={{
            position:"absolute",
            transform: [
              {translate: [0,0,-4]}
            ]
          }}
        >
          <Earth 
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
