import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

  const stylesheet = StyleSheet.create({
    button: {...styles.border},
    dimensions: {height: 50},
    icon: {color: 'white'},
    light: {...styles.light},
    dark: {...styles.dark},
    opacityLight: {...styles.opacityLight},
    opacityNormal: {...styles.opacityNormal},
    icon: {
      color: 'rgba(245, 245, 245, 1)',
    },
    text: {
      color: 'rgba(245, 245, 245, 1)',
      fontFamily: styles.textBold.fontFamily,
      fontSize: styles.textBold.fontSize,
      fontStyle: styles.textNormal.fontStyle,
    },
  });
  return stylesheet;
};
