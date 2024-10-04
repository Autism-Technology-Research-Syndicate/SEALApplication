import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);
  const stylesheet = StyleSheet.create({
    container: {
      ...styles.container,
      backgroundColor: '#f0f0f0',
    },
    body: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
    },
    title: {
      ...styles.header,
      fontSize: 28,
      marginBottom: 20,
      color: '#305070',
      textAlign: 'center',
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      rowGap: 20,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  return stylesheet;
};
