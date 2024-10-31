import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
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
      ...styles.headerText,
      fontSize: 28 * fontConfig.fontScale,
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
      fontFamily: fontConfig.regular,
      color: '#FFFFFF',
      fontSize: 16 * fontConfig.fontScale,
      textAlign: 'center',
    },
  });
  return stylesheet;
};
