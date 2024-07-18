import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity, Alert, StyleSheet} from 'react-native';
import RNFS from 'react-native-fs';
import {
  insertImageData,
  getImageData,
  updateImageData,
  deleteImageData,
  initializeDatabase,
  printFirstRow,
} from '../Database/dbInitialization.js';

function saveImageToDb(toSend, input, output) {
  insertImageData(toSend, input, output);
}

function URIToB64Str(uri, input, output) {
  RNFS.readFile(uri, 'base64')
    .then(base64String => {
      saveImageToDb(base64String, input, output);
    })
    .catch(error => {
      console.log('Error converting URI to base64 string:', error);
    });
}

export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
    };
    initializeDatabase();
    getImageData();
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});
      console.log('trying pic');
      try {
        const data = await this.camera.takePictureAsync(options);
        Alert.alert('Success', JSON.stringify(data));
        this.setState({takingPic: false});
        URIToB64Str(data.uri, -1, -1);
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return data.uri;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.front}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={this.takePicture}>
          <Icon name="camera" size={50} color="#fff" />
        </TouchableOpacity>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
});
