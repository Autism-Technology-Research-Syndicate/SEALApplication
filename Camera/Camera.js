import React, { PureComponent } from 'react';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

import RNFS from 'react-native-fs';
import {
  insertImageData,
  getImageData,
  updateImageData,
  deleteImageData,
  initializeDatabase,
  printFirstRow
} from '../Database/dbInitialization.js';

async function URIToB64Str(uri) {
  return new Promise((resolve, reject) => {
    RNFS.readFile(uri, 'base64')
    .then(base64String => {
      resolve(base64String);
    })
    .catch(error => {
      console.log('Error converting URI to base64 string:', error);
      reject(error);
    });
  })
}


export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
      photo: null
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

      this.setState({ takingPic: true });
      console.log("trying pic");
      try {
        const data = await this.camera.takePictureAsync(options);
        const photo = await URIToB64Str(data.uri,-1,-1);
        this.setState({ takingPic: false, photo: photo});
        // TODO: May require additional UI for like a button for to confirm saving???
        const savedImage = await insertImageData(photo);
        
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        console.log(data);
        return data.uri;
      } finally {
        this.setState({ takingPic: false });
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
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.front}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={this.takePicture}
        >
          <Icon name="camera" size={50} color="#fff" />
        </TouchableOpacity>
        {this.state.photo && (
          <View styles={styles.container}>
            <Image source={{uri: `data:image/jpeg;base64,${this.state.photo}`}} style={styles.stretch}/>
          </View>
          )}
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
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 400,
    height: 600,
    resizeMode: 'stretch',
  },
});