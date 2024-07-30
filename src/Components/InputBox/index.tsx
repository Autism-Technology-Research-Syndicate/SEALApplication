import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './defaultCSS';



export const createTextBox = (
  placeholder: string,
  setText: Function,
  defVal: string,
  kboard: string,
  secure: boolean = false,
) => {
  const kboardTypes: string[] = ['default', 'number-pad', 'email-address']

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(val: string) => setText(val)}
        defaultValue={defVal}
        // keyboardType={kboard ?  kboardTypes.includes(kboard) : 'default'}
        secureTextEntry={secure}
      />
    </View>
  );
};
