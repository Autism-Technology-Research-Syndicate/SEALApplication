import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './defaultCSS';

type props = {
  password: boolean;
};

function Index(props) {
  const {label = 'Heeelo', placeholder='', icon = "" } = props;
  const isPassword = props.validationType === "password"

  return (
    <TextInput
    mode="outlined"
    outlineStyle={styles.input}
    contentStyle={styles.placeholder}
    style={styles.placeholder}
    outlineColor={styles.placeholder.color}
    label={label}
    value={props.value}
    placeholder={placeholder}
    onChangeText={props.onChangeText}
    secureTextEntry= {isPassword}
    right={isPassword ? <TextInput.Icon icon="eye" /> : ''}
    {...props}
  />

  );
};

export default Index;
