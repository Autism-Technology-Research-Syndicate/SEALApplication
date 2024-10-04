import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

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
