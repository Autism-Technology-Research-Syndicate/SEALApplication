import React, {PureComponent} from 'react';import {RNCamera} from 'react-native-camera';
export default class Camera extends PureComponent {  constructor(props) {
  super(props);}
render() {
  return (
    // gives us access to an instance of the camera component
    <RNCamera 
      ref={ref => {
        this.camera = ref;
      }}
      captureAudio={false}
      // so the camera covers the container space
      style={{flex: 1}}
      // the type of camera we want
      type={RNCamera.Constants.Type.front}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} />
    );
  }}