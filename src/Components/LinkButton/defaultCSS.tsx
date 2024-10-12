import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    text: {
      color: styles.defaultColor,
      fontSize: styles.textBold.fontSize,
      fontFamily: styles.textBold.fontFamily,
      textDecorationLine: 'underline',
    },
  });
  return stylesheet;
};
