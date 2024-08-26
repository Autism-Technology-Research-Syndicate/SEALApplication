import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
import { useTensorflowModel } from 'react-native-fast-tflite';
import { StyleSheet } from 'react-native';

function VisionCamera() {
  const { hasPermission, requestPermission } = useCameraPermission();
  if (!hasPermission) requestPermission();

  const objectDetection = useTensorflowModel(require('../model.tflite'));
  const model = objectDetection.state === "loaded" ? objectDetection.model : undefined;

  console.log(model, 'hiiEE');
  const device = useCameraDevice('back');

  let buffer = []; 
  let outputData = '';
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
   if (model == null) return;
     buffer = frame.toArrayBuffer();
   // const data = new Uint8Array(buffer);
   outputData =  model.run(buffer);
    console.log(outputData);
  }, [])

  return (
    !!device && 
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
