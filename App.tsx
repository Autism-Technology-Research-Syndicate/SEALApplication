import React, {useState, useEffect, useRef} from 'react';
import Camera from './Camera/Camera';
import {
  SafeAreaView,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

interface Picture {
  uri: string;
}

const App: React.FC = () => {
  const testingIMGUrl = {
    uri: 'https://www.parents.com/thmb/qKThoOlGAzJwGZ-moTTGQVFRvhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc=/Grass-Fed-vs-Organic-Milk-9fff118133c14e578c2379ed86888817.jpg',
  };
  const [img, setImg] = useState<string | null>(null);
  const cameraRef = useRef<Camera>(null);

  function onPicture({uri}: Picture) {
    setImg(uri);
  }

  function onBackToCamera() {
    setImg(null);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cameraRef.current) {
        cameraRef.current.takePicture();
      }
    }, 10000); // Replace 10000 with the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {img ? (
        <TouchableHighlight style={styles.flex} onPress={onBackToCamera}>
          <Image source={{uri: img}} style={styles.flex} />
        </TouchableHighlight>
      ) : (
        <Camera ref={cameraRef} onPicture={onPicture} />
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

export default App;
