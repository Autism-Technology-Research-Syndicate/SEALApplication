import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
import { useTensorflowModel } from 'react-native-fast-tflite';
import { createResizePlugin } from 'vision-camera-resize-plugin'
import { StyleSheet } from 'react-native';

function VisionCamera() {
  const { resize } = createResizePlugin();

  const { hasPermission, requestPermission } = useCameraPermission();
  if (!hasPermission) requestPermission();

  const objectDetection = useTensorflowModel(require('../model.tflite'));
  const model = objectDetection.state === "loaded" ? objectDetection.model : undefined;

  console.log(model, 'hiiEE');
  const device = useCameraDevice('front');

  let buffer = [];
  let outputData = '';
  let data = [];
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    if (model == null) return;

    
    const data = resize(frame, {
      scale: {
        width: 5,
        height: 5,
      },
      pixelFormat: 'rgb',
      dataType: 'uint8'
    });

    const output = model.runSync([data])

    console.log('model output ----> ', output);

  }, [])

  return (
    !!device &&
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={10}
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1
  }
});

export default VisionCamera;
