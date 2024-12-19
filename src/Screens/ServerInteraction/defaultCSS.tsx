import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';
import styles from '../CurriculumTodo/styles';

export const getStyles = (fontConfig: FontConfigType) => {
  return StyleSheet.create({
    container: {
      flex: 1, // Full height
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      padding: 20, // Optional padding
    },
    text: {
      fontFamily: fontConfig.regular,
      fontSize: 16 * fontConfig.fontScale,
      color: '#111133',
      marginBottom: 20,
      textAlign: 'center',
      overflow: 'hidden',
      width: '80%',
    },
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
    error: {
      fontFamily: fontConfig.regular,
      fontSize: 16 * fontConfig.fontScale,
      color: 'red',
      marginBottom: 20,
      textAlign: 'center',
    },
    header: {
      fontFamily: fontConfig.bold,
      fontSize: 24 * fontConfig.fontScale,
      alignSelf: 'center',
      color: '#305070',
    },
    subheader: {
      fontFamily: fontConfig.regular,
      fontSize: 24 * fontConfig.fontScale,
      alignSelf: 'center',
      color: '#305070',
      marginBottom: 10,
    },
    button: {
      fontFamily: fontConfig.regular,
      padding: 10,
      marginHorizontal: 40,
      backgroundColor: '#305070',
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonContainer: {
      fontFamily: fontConfig.regular,
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: 20,
      rowGap: 20,
    },
    buttonText: {
      fontFamily: fontConfig.regular,
      fontSize: 16 * fontConfig.fontScale,
      color: '#fff',
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    settingOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#555555',
      borderBottomWidth: 1,
      paddingVertical: 8,
    },
    content: {
      marginHorizontal: 15,
      marginBottom: 5,
      flex: 1,
      flexGrow: 1,
    },
    value: {
      textAlign: 'center',
      fontSize: 16 * fontConfig.fontScale,
      fontFamily: fontConfig.regular,
    },
    bottom_section: {
      justifyContent: 'flex-end',
      rowGap: 20,
    },
  });
};