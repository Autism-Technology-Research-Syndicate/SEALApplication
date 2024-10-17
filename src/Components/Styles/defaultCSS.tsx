import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    border: {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    dark: { backgroundColor: 'rgba(48, 80, 112, 1)' },
    light: { backgroundColor: 'rgba(132, 182, 207, 1)' },
    opacityLight: { opacity: 0.85 },
    opacityNormal: { opacity: 1 },
    disabled: {opacity: 0.50 },
    textNormal: styles.textNormal,
    textBold: styles.textBold,
    defaultColor: styles.defaultColor,
  });
  return stylesheet;
};
