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
import DogMarker from "./components/locationMarker/dogMarker";

const europeanCities = [  
  { 
    coordinates: { lat: 48.7128, lon: 2.3522 },
    component: <Marker />
  },{ 
    coordinates: { lat: 41.9028, lon: 12.4964 },
    component: <Marker />
  },{ 
    coordinates: { lat: 52.5200, lon: 13.4050 },
    component: <Marker />
  },{ 
    coordinates: { lat: 64.1265, lon: -21.8174 },
    component: <Marker />
  }  
]

const dogCities = [  
  { 
    coordinates: { lat: 43.3601, lon: -71.0589 },
    component: <DogMarker />
  },{ 
    coordinates: { lat: 40.7128, lon: -74.0060 },
    component: <DogMarker />
  },{ 
    coordinates: { lat: 44.3876, lon: -68.2039 },
    component: <DogMarker />
  }  
]

export default class world_explorer extends React.Component {
  constructor(){
    super();
    this.earthRadius = 2.5;
    this.state = {
      locationItems: []
    }
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
            width:1.5,
            height:1,
            backgroundColor:"grey",
            padding:.1,
            transform: [
              {translate: [-3.8,1,-3]},
              {rotateY: 25}
            ]
          }}
        >
          <Text>Select an option to load new locations</Text>
          <VrButton style={buttonStyle} onClick={()=>this.setState({
            locationItems: europeanCities
          })}>
            <Text>European Cities</Text>
          </VrButton>
          <VrButton style={buttonStyle} onClick={()=>this.setState({
            locationItems: dogCities
          })}>
            <Text>Places my dog has been</Text>
          </VrButton>
        </View>
        <View
          style={{
            position:"absolute",
            transform: [
              {translate: [0,0,-3]}
            ]
          }}
        >
          <Earth 
            locationMarkerStyle={{color: "red"}}
            showLocationMarkers={true}
            locationContent={this.state.locationItems} 
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
