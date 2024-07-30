import React from 'react';
import { TextInput,View } from 'react-native';
import { Icon } from 'react-native-elements'
import styles from './defaultCSS';

type props = {
  password: boolean;
};

function index(props) {
  const [text, onChangeText] = React.useState('');
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={props.placeholder}
      value={text}
    />

  );
};

export default index;
