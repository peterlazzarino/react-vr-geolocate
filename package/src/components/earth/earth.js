import React from "react";
import {
    asset
} from 'react-vr';
import PropTypes from "prop-types";
import SpaceSphere from "../solar-system/spaceSphere";
import Overlay from "../mapOverlay/overlay/overlay";
import EarthSpin from "../solar-system/earthSpin";
import { earthSpinOffset } from "../../consts/rotationOffset"

class Earth extends React.Component{
	static defaultProps = {
        scale: 1.5,
        showLocationMarkers: false
	}
    render(){
        const { locationContent, scale, wrap, showLocationMarkers, locationMarkerStyle } = this.props;
        return (
            <EarthSpin xOffset={earthSpinOffset} yOffset={0} locationContent={locationContent} >
                <SpaceSphere 
                    wrap={wrap} 
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


Earth.propTypes = {
    locationContent: PropTypes.array.isRequired,
    scale: PropTypes.number.isRequired,
    wrap: PropTypes.object.isRequired,
    showLocationMarkers: PropTypes.bool,
    locationMarkerStyle: PropTypes.object
}

export default Earth;