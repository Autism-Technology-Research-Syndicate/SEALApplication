import { View } from 'react-native';
import { Camera } from 'expo-camera';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';

const TensorCamera = cameraWithTensors(Camera);


const handleCameraStream = (images, updatePreview, gl) => {
  const loop = async () => {
    const nextImageTensor = images.next().value

    //
    // do something with tensor here
    //

    // if autorender is false you need the following two lines.
    // updatePreview();
    // gl.endFrameEXP();

    requestAnimationFrame(loop);
  }
  loop();
}

const TensorFlowCamera = () => {

  return (
    <View>
      <TensorCamera
       // Standard Camera props
       style={styles.camera}
       type={Camera.Constants.Type.front}
       // Tensor related props
       resizeHeight={200}
       resizeWidth={152}
       resizeDepth={3}
       onReady={this.handleCameraStream}
       autorender={true}
      />
    </View>);
};

export default TensorFlowCamera;
