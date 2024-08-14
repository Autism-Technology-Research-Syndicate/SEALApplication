import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
import { StyleSheet, useState } from 'react-native';


export function VisionCamera() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`)
  }, [])

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      video={true}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1
  }
});
