import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './defaultCSS';



export const createTextBox = (
  placeholder: string,
  defVal: string,
  setText: Function,
  inputMode: any = 'text',
  valid: boolean = true,
  secure: boolean = false,
  multiline: boolean = false,
) => {
  return (
    <View>
      <TextInput
        style={[styles.input, !valid ? styles.invalid : null]}
        placeholder={placeholder}
        placeholderTextColor={'#2C3E50'}
        onChangeText={(val: string) => setText(val)}
        defaultValue={defVal}
        inputMode={inputMode}
        secureTextEntry={secure}
        multiline={multiline}
      />
    </View>
  );
};