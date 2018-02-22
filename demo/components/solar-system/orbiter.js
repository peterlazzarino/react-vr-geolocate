import React from "react";
import {
    View,
    Sphere,
    asset,
    Animated
} from 'react-vr';
import { Easing } from 'react-native';
import SpaceSphere from "./spaceSphere";
import { overlayLonOffset } from "../../consts/rotationOffset";

class Orbiter extends React.Component{
    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    spin(to){
        this.state.bounceValue.setValue(0);
        Animated.timing(this.state.bounceValue, {
            toValue: to,     
            duration: 200000,
            easing: Easing.linear
        }).start((o) => {
            if(o.finished){
                this.spin(to);
            }
        });
    }
    componentDidMount() {    
        this.spin(360)                              
    }
    render(){
        return (          
            <View style={{    
                position:"absolute",
                transform: [
                    { rotateX: "20deg"}
                ]                
            }}>
                <Animated.View style={{    
                    position:"absolute",
                    transform: [
                        { rotateY: this.state.bounceValue},
                        { translate: [0, 0, overlayLonOffset]  }, 
                    ]                
                }}>
                    <SpaceSphere 
                        wrap={asset(this.props.src)} 
                        radius={this.props.size} 
                    />
                </Animated.View>   
            </View>
        )
    }
}

export default Orbiter;