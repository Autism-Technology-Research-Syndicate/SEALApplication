import React from 'react';
import { Text, TouchableOpity } from 'react-native';
import styles from './defaultCSS';
import { Button } from 'react-native-paper';

function Index(props) {
  const { onPress, title = 'Heeelo' } = props;

  return (  <Button mode="text" {...props}  onPress={onPress} >
    <Text style={[styles.text, props.style]}>{title}</Text>
  </Button>);

};

export default Index;
