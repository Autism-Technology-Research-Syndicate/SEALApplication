import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    button: {...styles.border},
    light: {...styles.light},
    dark: {...styles.dark},
    opacityLight: {...styles.opacityLight},
    opacityNormal: {...styles.opacityNormal},
    text: {
      height: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'rgba(245, 245, 245, 1)',
      textAlign: 'center',
      fontFamily: styles.textBold.fontFamily,
      fontSize: 18 * fontConfig.fontScale,
      textAlignVertical: 'center',
    },
  });
  return stylesheet;
};
