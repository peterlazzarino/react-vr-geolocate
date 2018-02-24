# react-vr-geolocate

Show geo-location data in VR on a 3D representation of the earth.

![Preview Image](https://media.giphy.com/media/3rWuaYmaxIWZbTVaRg/giphy.gif)

This component will render a VR Earth Sphere and takes a collection of objects with lat / lon and a react component. It will render the components at their 3D coordinates on the earth translated from lat / lon. 

When locations are passed in or changed, the earth will rotate to them automatically, calculating a midpoint between them as a focal point for the user. 

It also accepts an earth texture for wrapping, a scale prop to size and scale the earth, and props to render and style markers at the locations you pass in to be show in addition to the components passed in. 

View demo here - https://peterlazzarino.github.io/react-vr-geolocate/

# Installation

install with npm

`npm install react-vr-geolocate --save`

# Usage

Import the component and pass in your location data along with a pano image to give the earth texture.

You will also want to wrap the component in a view and move it somewhere the user can see it. See below for a transform that works well for centering it in front of the user with translate Z.

```javascript
import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  AmbientLight,
  View
} from 'react-vr';
import Earth from "react-vr-geolocate";
import Marker from "./components/locationMarker/marker";

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

export default class world_explorer extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View> 
        <View
          style={{
            position:"absolute",
            transform: [
              { translate: [0,0,-3.5] }
            ]
          }}
        >
          <Earth 
            locationMarkerStyle={{color: "black"}}
            showLocationMarkers={true}
            wrap={asset("earth.jpg")}
            locationContent={europeanCities} 
            scale={1.5} 
          />
        </View>
        <Pano source={asset('chess-world.jpg')}/> 
        <AmbientLight intensity={1.2} decay={100} />        
      </View>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);

```

# Props

### locationContent

Type: [] { component, coordinates}  Default: []  IsRequired: Yes

The items you want to load on the earth

### wrap

Type: object  Default: undefined  IsRequired: Yes

The source of the texture of the earth sphere. See [ReactVR Sphere props](https://facebook.github.io/react-vr/docs/sphere.html)

### scale

Type: number  Default: 1.5  IsRequired: No

The size of the earth, will auto scale coordinates.

### showLocationMarkers

Type boolean  Default: false  IsRequired: No

Show markers at the coordinates, can be styled with next prop and will show along with whatever component you pass.

### locationMarkerStyle

Type object (style)  Default: undefined  IsRequired: No

Style the location markers (color, transform, etc)
