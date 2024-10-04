import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);
  const stylesheet = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontFamily: fontFamily.bold,
      marginBottom: 20,
      color: '#305070',
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#305070',
      fontFamily: fontFamily.bold,
    },
    button: {
      backgroundColor: '#305070',
      padding: 15,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: fontFamily.bold,
    },
    errorText: {
      color: 'white',
      backgroundColor: 'red',
      padding: 8,
      marginTop: -5,
      marginBottom: 12,
      borderRadius: 5,
      fontSize: 14,
    },
  });

  return stylesheet;
};
