import React from "react";
import {
    Animated,
    Sphere,
    View,
} from 'react-vr';
import { distanceBetweenPoints, midpoint } from "../../helpers/coordinateHelpers";

export default class EarthSpin extends React.Component{
    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.resetEarthPosition = this.resetEarthPosition.bind(this);
        this.primeMeridianOffset = this.props.xOffset || 0;
        this.equatorOffset = this.props.yOffset || 0;
        this.state = {
            bounceXValue: new Animated.Value(this.primeMeridianOffset),
            bounceYValue: new Animated.Value(this.equatorOffset),
        };
    }
    mapLatitude(lat){
        return lat + this.equatorOffset;
    }
    mapLongitude(lon){
        return (lon >= 0 ? -lon : Math.abs(lon)) + this.primeMeridianOffset;
    }
    resetEarthPosition(props){
        const locationItems = props.locationContent;
        if(!Array.isArray(locationItems) || locationItems.length <= 0){
            return false;
        }
        let focalPoint = locationItems[0];
        if(locationItems.length >= 1){
            const firstLoc = locationItems[0].coordinates;
            const lastLoc = locationItems[locationItems.length - 1].coordinates;
            focalPoint = midpoint(firstLoc, lastLoc, .5);
        }        
        this.spin(this.mapLatitude(focalPoint.coordinates.lat), this.mapLongitude(focalPoint.coordinates.lon));        
    }
    componentWillMount(){
        this.resetEarthPosition(this.props);
    }
    componentWillReceiveProps(next){
        this.resetEarthPosition(next)
    }
    spin(lat, lon){
        Animated.spring(this.state.bounceXValue, {
            toValue: lon,
            friction: 15,
            tension: 4
        }).start();
        Animated.spring(this.state.bounceYValue, {
            toValue: lat,
            friction: 15,
            tension: 4
        }).start();
    }    
    render(){
        return (
            <Animated.View style={{
                transform: [
                    { rotateX: this.state.bounceYValue},
                    { rotateY: this.state.bounceXValue},
                ],
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}