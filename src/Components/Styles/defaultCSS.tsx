import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

  const stylesheet = StyleSheet.create({
    border: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    dark: {backgroundColor: 'rgba(48, 80, 112, 1)'},
    light: {backgroundColor: 'rgba(132, 182, 207, 1)'},
    opacityLight: {opacity: 0.85},
    opacityNormal: {opacity: 1},
    textNormal: styles.textNormal,
    textBold: styles.textBold,
    defaultColor: styles.defaultColor,
  });
  return stylesheet;
};
