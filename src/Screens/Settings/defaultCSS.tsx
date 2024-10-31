import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      rowGap: 10,
      padding: 10,
    },
    subheader: {
      ...styles.textNormal,
      fontSize: 24 * fontConfig.fontScale,
      alignSelf: 'center',
      color: '#305070',
    },
    header: {
      ...styles.headerText,
      alignSelf: 'center',
      color: '#305070',
    },
    content: {
      marginHorizontal: 15,
      marginBottom: 5,
      flex: 1,
      flexGrow: 1,
    },
    section: {
      flex: 1,
      rowGap: 10,
    },
    text: {
      ...styles.textNormal,
      fontSize: 15 * fontConfig.fontScale,
      color: '#111133',
      width: '80%',
      overflow: 'hidden',
    },
    settingOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#555555',
      borderBottomWidth: 1,
      paddingVertical: 8,
    },
    buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 1,
      width: '20%',
    },
    button: {
      padding: 5,
    },
    value: {
      // minWidth: 30,
      textAlign: 'center',
      fontFamily: fontConfig.regular,
      fontSize: 16 * fontConfig.fontScale,
    },
  });

  return stylesheet;
};
