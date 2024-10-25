import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nav: {
      backgroundColor: styles.VeryDarkDesaturatedBlue,
      highLight: styles.DarkModerateCyan,
      inActive: styles.White,
    },
    icon: {
      fontSize: 15 * fontConfig.fontScale,
      fontStyle: styles.textNormal.fontStyle,
      color: styles.White,
    },
    middle: {
      position: 'absolute',
      top: '-50%',
      height: 70,
      width: 70,
      backgroundColor: '#29fd53',
    },
  });
  return stylesheet;
};
