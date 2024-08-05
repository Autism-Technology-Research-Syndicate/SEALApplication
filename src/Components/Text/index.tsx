import React from 'react';
import { Text } from 'react-native-paper';
import styles from './defaultCSS';

function Index(props) {

  return (<Text variant="bodyLarge" style={{...styles.text,...props.style}}>{props.children}</Text>);
};

export default Index;
