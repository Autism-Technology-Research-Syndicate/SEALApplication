import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
    },
    middle_section: {
      rowGap: 30,
      paddingTop: 15,
    },
    header: {
      fontFamily: fontConfig.bold,
      color: styles.defaultColor,
      fontSize: 40 * fontConfig.fontScale,
    },
    subheader: {
      fontFamily: fontConfig.regular,
      color: styles.defaultColor,
      fontSize: 30 * fontConfig.fontScale,
      paddingBottom: 20,
      paddingTop: 5,
    },
    bottom_section: {
      justifyContent: 'flex-end',
      rowGap: 20,
    },
  });

  return stylesheet;
};
