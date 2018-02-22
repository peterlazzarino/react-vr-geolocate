import React from "react";
import {
    asset
} from 'react-vr';
import SpaceSphere from "../solar-system/spaceSphere";
import Overlay from "../mapOverlay/overlay/overlay";
import EarthSpin from "../solar-system/earthSpin";
import { earthSpinOffset } from "../../consts/rotationOffset"

class Earth extends React.Component{
    render(){
        const { locationContent, scale, showLocationMarkers, locationMarkerStyle } = this.props;
        return (
            <EarthSpin xOffset={earthSpinOffset} yOffset={0} locationContent={locationContent} >
                <SpaceSphere 
                    wrap={asset("earth.jpg")} 
                    radius={scale} 
                    lit={true}
                />
                <Overlay 
                    showLocationMarkers={showLocationMarkers} 
                    locationMarkerStyle={locationMarkerStyle}
                    locationContent={locationContent} 
                    sphereRadius={scale} 
                />
            </EarthSpin>
        )
    }
}

export default Earth;