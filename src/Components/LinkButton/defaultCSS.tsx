import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    text: {
      ...styles.textBold,
      alignItems: 'center',
      color: styles.defaultColor,
      textDecorationLine: 'underline',
      // textAlign: 'center',
    },
    button: {
      paddingVertical: 8,
    },
  });
  return stylesheet;
};
