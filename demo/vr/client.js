import { VRInstance } from 'react-vr-web';
import * as OVRUI from 'ovrui';
import * as THREE from 'three';
import ControllerRayCaster from 'react-vr-controller-raycaster';
import * as SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options) {  
  const scene = new THREE.Scene();
  const vr = new VRInstance(bundle, 'world_explorer', parent, {
    raycasters: [
      new ControllerRayCaster({scene, color: '#ff0000'}),
      new OVRUI.MouseRayCaster(),
      SimpleRaycaster 
    ],
    scene: scene,
    cursorVisibility: 'visible',
    ...options,
  });
  vr.render = function() { };
  vr.start();
  return vr;  
}

window.ReactVR = {init};
