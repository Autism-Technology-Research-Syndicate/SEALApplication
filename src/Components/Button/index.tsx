import React, { Fragment } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './defaultCSS';
import WebCamFeed from '../WebCamFeed';
//import { WelcometoSEAL } from './WelcometoSEAL';

type props = {
  light: boolean;
};


function index(props) {
  const { onPress, title = 'Heeelo', isActive = true, light } = props;
  return (
    <Pressable style={[styles.button, styles.opacityLight, (light ? styles.light : styles.dark)]} onPress={onPress}>
      <Text style={[styles.text, styles.opacityNormal]}>{title}</Text>
    </Pressable>
  );
};

export default index;
