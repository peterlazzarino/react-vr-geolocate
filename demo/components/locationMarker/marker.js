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
                    { translate: [-.05,.1,0]}
                ],
                width:.05, 
                height:.05
            }} source={asset("pin.png")} />
        )
    }
}