import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
import { useTensorflowModel } from 'react-native-fast-tflite';
import { StyleSheet } from 'react-native';

function VisionCamera() {
  const objectDetection = useTensorflowModel(require('../model.tflite'));
  const model = objectDetection.state === "loaded" ? objectDetection.model : undefined;

  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera']
  });
  const { hasPermission, requestPermission } = useCameraPermission();

  let outputData = '';
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
   if (model == null) return;
   //console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`);

    const buffer = frame.toArrayBuffer()
   // const data = new Uint8Array(buffer)
    outputData =  model.run(buffer);
    console.log(outputData);
  }, [])

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      video={true}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={30}
      photoQualityBalance="speed"
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1
  }
});

export default VisionCamera;
