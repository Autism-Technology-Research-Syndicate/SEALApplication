import React from 'react';
import {Text, Pressable } from 'react-native';
import styles from './defaultCSS';


type props = {
  light: boolean;
};


function index(props) {
  const { onPress, title = 'Heeelo', isActive = true, light } = props;
  return (
    <Pressable style={[props.style, styles.button, styles.opacityLight, (light ? styles.light : styles.dark)]} onPress={onPress}>
      <Text style={[styles.text, styles.opacityNormal]}>{title}</Text>
    </Pressable>
  );
};

export default index;
