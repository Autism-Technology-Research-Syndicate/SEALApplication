import React from 'react';
import {Text, Pressable } from 'react-native';
import styles from './defaultCSS';


type props = {
  light: boolean;
};


function Index(props) {
  const { onPress, title = 'Heeelo', isActive = true, light } = props;
  const combinestyles = [styles.button, styles.opacityLight, (light ? styles.light : styles.dark)];
  return (
    <Pressable style={combinestyles} onPress={onPress}>
      <Text style={[styles.text, styles.opacityNormal]}>{title}</Text>
    </Pressable>
  );
};

export default Index;
