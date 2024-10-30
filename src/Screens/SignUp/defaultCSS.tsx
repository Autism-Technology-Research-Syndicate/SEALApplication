import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24 * fontConfig.fontScale,
      fontFamily: fontConfig.bold,
      marginBottom: 20,
      color: '#305070',
    },
    label: {
      fontSize: 16 * fontConfig.fontScale,
      marginBottom: 5,
      color: '#305070',
      fontFamily: fontConfig.bold,
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
      fontSize: 18 * fontConfig.fontScale,
      fontFamily: fontConfig.bold,
    },
    errorText: {
      color: 'white',
      backgroundColor: 'red',
      padding: 8,
      marginTop: -5,
      marginBottom: 12,
      borderRadius: 5,
      fontSize: 14 * fontConfig.fontScale,
    },
  });

  return stylesheet;
};
