import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
//import { loadTensorflowModel } from 'react-native-fast-tflite';
import { StyleSheet, useState } from 'react-native';



export function VisionCamera() {
  //const model = loadTensorflowModel(require('./model.tflite'))

  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera']
  });
  const { hasPermission, requestPermission } = useCameraPermission();

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`)
    //const outputData =  model.run(frame)
    //console.log(outputData)
  }, [])

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      video={true}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
      photoQualityBalance="speed"
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1
  }
});
