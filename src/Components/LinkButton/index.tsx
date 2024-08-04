import React from 'react';
import { Text } from 'react-native';
import styles from './defaultCSS';
import { Button } from 'react-native-paper';

function Index(props) {
  const { onPress, title = 'Heeelo' } = props;

  return (  <Button labelStyle={[styles.text, props.style]} mode="text" {...props}  onPress={onPress} >
   {title}
  </Button>);

};

export default Index;
