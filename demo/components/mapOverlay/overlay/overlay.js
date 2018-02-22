import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import { to3dLocation } from "../../../helpers/coordinateHelpers";
import LocationOverlay from "./content/locationOverlay";

export default class Overlay extends React.Component{
    constructor(){
        super();
    }
    render(){   
        const { locationContent, showLocationMarkers, locationMarkerStyle, sphereRadius } = this.props;  
        return (
            <View>
                {locationContent.map((location, idx) => {
                    const location3dCoords = to3dLocation(location.coordinates, sphereRadius);
                    return (
                        <View key={`${location.location}-${idx}`} style={{
                            position:"absolute" ,
                            transform: [
                                { translate: location3dCoords },
                            ]
                        }}> 
                            {showLocationMarkers && <Sphere radius={.004} heightSegments={15} widthSegments={15} style={locationMarkerStyle} />}
                            <LocationOverlay location={location} />                            
                        </View>
                    )
                })}
            </View> 
        )
    }
} 