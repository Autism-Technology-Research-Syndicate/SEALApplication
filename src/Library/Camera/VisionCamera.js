import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor, useCameraFormat } from 'react-native-vision-camera';
import {  Skia } from '@shopify/react-native-skia';
import { useTensorflowModel } from 'react-native-fast-tflite';
import { createResizePlugin } from 'vision-camera-resize-plugin'
import { StyleSheet } from 'react-native';


/*
const invertColorsFilter = Skia.RuntimeEffect.Make(`
  uniform shader image;
  half4 main(vec2 pos) {
    vec4 color = image.eval(pos);
    return vec4((1.0 - color).rgb, 1.0);
  }
`)
const shaderBuilder = Skia.RuntimeShaderBuilder(invertColorsFilter)
const imageFilter = Skia.ImageFilter.MakeRuntimeShader(shaderBuilder, null, null)
const paint = Skia.Paint()
paint.setImageFilter(imageFilter)
*/

function VisionCamera() {
  const { resize } = createResizePlugin();

  const { hasPermission, requestPermission } = useCameraPermission();
  if (!hasPermission) requestPermission();

  const objectDetection = useTensorflowModel(require('../model.tflite'));
  const model = objectDetection.state === "loaded" ? objectDetection.model : undefined;

  console.log(model, 'hiiEE');
  const device = useCameraDevice('front');

  const format = useCameraFormat(device, [
    {videoResolution: { width: 64, height: 64 } },
    { fps: 1 }
  ])

  let output = {};
  let data = [];

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    if (model == null) return;

    data = resize(frame, {
      scale: {
        width: 12,
        height: 12,
      },
      pixelFormat: 'rgb',
      dataType: 'uint8'
    });

    output = model.runSync([data])

    console.log('model output ----> ', output);

  }, []);

  /*
  const frameProcessor = useSkiaFrameProcessor((frame) => {
    'worklet'
    if (model == null) return;

    frame.render();

    const data = resize(frame, {
      scale: {
        width: 1,
        height: 1,
      },
      pixelFormat: 'rgb',
      dataType: 'uint8'
    });

    const output = model.runSync([data])

    console.log( output[0]["0"],  output[0]["1"]);

    const centerX = frame.width / 2
    const centerY = frame.height / 2
    const rect = Skia.XYWHRect(centerX, centerY, 150 - output[0]["0"], 150 - output[0]["1"])
    const paint = Skia.Paint()
    paint.setColor(Skia.Color('red'))
    frame.drawRect(rect, paint)
  }, []);
  */

  return (
    !!device &&
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      format={format}
    />
  );
}

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1
  }
});

export default VisionCamera;
