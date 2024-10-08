import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './defaultCSS';

type props = {
  password: boolean;
};

function Index(props) {
  const [text, onChangeText] = React.useState('');
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
    value={text}
    placeholder={placeholder}
    onChangeText={onChangeText}
    secureTextEntry= {isPassword}
    right={isPassword ? <TextInput.Icon icon="eye" /> : ''}
  />

  );
};

export default Index;
