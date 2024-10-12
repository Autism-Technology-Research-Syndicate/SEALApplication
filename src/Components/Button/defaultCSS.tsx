import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

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
      fontFamily: styles.textNormal.fontFamily,
      fontSize: styles.textNormal.fontSize,
    },
  });
  return stylesheet;
};
