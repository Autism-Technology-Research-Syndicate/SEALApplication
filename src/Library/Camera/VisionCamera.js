import { useCameraDevice, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
//import { loadTensorflowModel } from 'react-native-fast-tflite';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react'
import { Camera, useImageLabeler } from 'react-native-vision-camera-image-labeler';

export function VisionCamera() {
  const [data,setData] = useState('');
  console.log(data);
  //const model = loadTensorflowModel(require('./model.tflite'))

  const {labelerImage} = useImageLabeler({minConfidence : 0.1})

  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera']
  });
  const { hasPermission, requestPermission } = useCameraPermission();

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
   // console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`)
   let data = '';
    if (labelerImage)
      data = labelerImage(frame)
    console.log(data, 'data')
    //const outputData =  model.run(frame)
    //console.log(outputData)
  }, [])

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      video={true}
      device={device}
      isActive={true}
      callback={(d) => setData(d)}
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1
  }
});
