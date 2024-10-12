import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    section: {
      backgroundColor: '#ff000',
      textAlign: 'center',
      alignSelf: 'stretch',
      paddingStart: 15,
      paddingEnd: 15,
    },
    header: {
      ...styles.headerText,
      width: '100%',
      color: 'black',
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    option: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    optionText: {
      ...styles.content,
      justifyContent: 'center',
      color: '#222222',
      fontFamily: fontConfig.regular,
    },
    fontButtons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    fontButton: {
      padding: 5,
      fontFamily: fontConfig.regular,
      backgroundColor: 'transparent',
      fontSize: 18 * fontConfig.fontScale,
    },
  });
  return stylesheet;
};
