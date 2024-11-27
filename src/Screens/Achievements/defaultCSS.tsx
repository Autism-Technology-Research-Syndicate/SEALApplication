import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  // console.log('scaleWidth:', scaleWidth);
  // console.log('scaleHeight:', scaleHeight);

  // const fontSize = 20; // Example font size
  // const headerFontSize = 27; // Example font size
  // const letterSpacing = fontSize * 0.02; // 2% of font size
  // const letterSpacingHeader = fontSize * -0.02; // 3% of font size

  const stylesheet = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    textNormal: {...styles.textNormal},
    header: {
      ...styles.headerText,
      textAlign: 'center',
      fontSize: 27 * fontConfig.fontScale,
      fontFamily: fontConfig.bold,
      lineHeight: 31.05,
      letterSpacing: 0.54,
    },
    subheader: {
      ...styles.subheaderText,
      fontSize: 18 * fontConfig.fontScale,
      fontFamily: fontConfig.bold,
      lineHeight: 21.98,
      letterSpacing: 0.36,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      flexGrow: 1,
    },

    itemText: {
      textAlign: 'center',
      fontFamily: fontConfig.bold,
      fontSize: 16 * fontConfig.fontScale,
      padding: 5,
      // lineHeight: 18.72,
      letterSpacing: 0.36,
      // ...styles.content
    },

    rowItem: {
      paddingTop: 49,
      gap: 15,
      borderWidth: 0.5,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      flex: 1,
      paddingBottom: 30,
      alignItems: 'center',
      textAlign: 'center',
    },
    section: {
      rowGap: 39,
      padding: 30,
    },
    inline: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    // award: {
    //     // rowGap: 10,
    // },
    // achievements: {
    //     textAlign: 'center',
    // },
  });
  return stylesheet;
};
