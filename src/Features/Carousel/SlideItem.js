import {
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import { getStyles } from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(40);
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
     {item.img}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;


