import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './defaultCSS';



export const createTextBox = (
  placeholder: string,
  defVal: string,
  setText: Function,
  keyboardType: any = 'default',
  invalid: boolean = false,
  secure: boolean = false,
  multiline: boolean = false,
) => {
  return (
    <View>
      <TextInput
        style={[styles.input, invalid ? styles.invalid : null]}
        placeholder={placeholder}
        onChangeText={(val: string) => setText(val)}
        defaultValue={defVal}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        multiline={multiline}
      />
    </View>
  );
};
