import React from 'react';
import {TextInput} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import {useFontContext} from '../../Contexts/FontContext';

type props = {
  password: boolean;
};

function Index(props) {
  const isPassword = props.validationType === "password"

  return (
    <TextInput
    mode="outlined"
    outlineStyle={styles.input}
    contentStyle={styles.placeholder}
    style={styles.placeholder}
    outlineColor={styles.placeholder.color}
    secureTextEntry= {isPassword}
    right={isPassword ? <TextInput.Icon icon="eye" /> : ''}
    keyboardType={props.type}
    {...props}
  />

  );
}

export default Index;
