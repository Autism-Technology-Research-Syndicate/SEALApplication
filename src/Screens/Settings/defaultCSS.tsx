import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

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
      justifyContent: 'center',
      color: '#222222',
      fontFamily: fontFamily.regular,
    },
    fontButtons: {
      flexDirection: 'row',
      marginEnd: 10,
    },
    fontButton: {
      padding: 10,
    },
  });
  return stylesheet;
};
