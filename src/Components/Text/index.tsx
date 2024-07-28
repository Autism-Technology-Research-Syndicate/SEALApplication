import React from 'react';
import { Text } from 'react-native';
import styles from './defaultCSS';

function index(props) {

  return (<Text style={[props.style, styles.text]}>{props.children}</Text>);
};

export default index;
