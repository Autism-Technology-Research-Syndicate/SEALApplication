import React, { Fragment } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './defaultCSS';
import WebCamFeed from '../WebCamFeed';
//import { WelcometoSEAL } from './WelcometoSEAL';

function index(props) {
  const { onPress, title = 'Heeelo', isActive = true } = props;
  return (
    <Pressable style={styles.activeButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default index;
