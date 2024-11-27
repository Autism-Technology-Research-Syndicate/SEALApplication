import React from 'react';
import {View, TextInput} from 'react-native';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';

/**
 * Creates a customizable text input box for React Native.
 *
 * @param {string} placeholder - The placeholder text for the input box.
 * @param {string} defVal - The default value of the input box.
 * @param {Function} setText - Function to update the text state.
 * @param {string} [inputMode='text'] - The keyboard for the text box (e.g., 'text', 'numeric', 'email').
 * @param {boolean} [valid=true] - Flag indicating if the input is valid. Used to apply validation styles.
 * @param {boolean} [secure=false] - Flag indicating if the input is a password (secure text entry).
 * @param {boolean} [multiline=false] - Flag indicating if the input allows multiple lines.
 *
 * @returns {React.JSX.Element} - The rendered text input component.
 */
export const createTextBox = (
  placeholder: string,
  defVal: string,
  setText: Function,
  inputMode: any = 'text',
  valid: boolean = true,
  secure: boolean = false,
  multiline: boolean = false,
) => {
  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);
  return (
    <View>
      <TextInput
        style={[styles.input, !valid ? styles.invalid : null]}
        placeholder={placeholder}
        placeholderTextColor={'#305070'}
        onChangeText={(val: string) => setText(val)}
        defaultValue={defVal}
        inputMode={inputMode}
        secureTextEntry={secure}
        multiline={multiline}
      />
    </View>
  );
};
