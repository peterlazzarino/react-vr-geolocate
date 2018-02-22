import React from "react";
import {
    Image,
    asset,
    View
} from "react-vr";

export default class Marker extends React.Component{
    render(){
        return (
            <Image style={{
                transform: [
                    { rotateX: 25},
                    { translate: [-.01,.08,0]}
                ],
                width:.05, 
                height:.05
            }} source={asset("pin.png")} />
        )
    }
}