import React, { useState, useEffect } from 'react';
import Camera from './../../Camera/Camera';
import { SafeAreaView, TouchableHighlight, Image, StyleSheet } from 'react-native';


interface Picture {
  uri: string;
}




const WebCamFeed: React.FC = () => {
const testingIMGUrl = {uri: 'https://www.parents.com/thmb/qKThoOlGAzJwGZ-moTTGQVFRvhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grass-Fed-vs-Organic-Milk-9fff118133c14e578c2379ed86888817.jpg'};
  const [img, setImg] = useState<string | null>(null);
// once we get the image and want to assign it to a variable to pass it to the db, can require it like so:
// const imageUrl = require('./path/to/local/image.png');
  // onPicture takes the uri pointing to the image and stores it as a part of the component state.
  // the URI is then being used to access the file
  function onPicture({ uri }: Picture) {
    setImg(uri);
   
  }

  function onBackToCamera() {
    setImg(null);
  
  }

  return (
    
    <SafeAreaView style={styles.container}>
      {img ? (
        <TouchableHighlight style={styles.flex} onPress={onBackToCamera}>
          <Image source={{ uri: img }} style={styles.flex} />
        </TouchableHighlight>
      ) : (
        <Camera onPicture={onPicture} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

export default WebCamFeed;
