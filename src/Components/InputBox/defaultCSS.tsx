import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    input: {
      width: '100%',
      height: 40,
      borderColor: '#BDC3C7',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    invalid: {
      borderColor: 'red',
    },
  });

  return stylesheet;
};
