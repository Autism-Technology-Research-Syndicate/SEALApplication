import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
      flex: 2,
      rowGap: 50,
      justifyContent: 'center',
      fontFamily: fontConfig.regular,
    },
    upper_body: {
      justifyContent: 'center',
      rowGap: 20,
      fontFamily: fontConfig.regular,
    },
    bottom_body: {
      rowGap: 20,
      fontFamily: fontConfig.regular,
    },
    middle_body: {
      rowGap: 10,
      marginTop: 20,
      fontFamily: fontConfig.regular,
    },
    text: {
      ...styles.textNormal,
      textAlign: 'center',
    },
  });

  return stylesheet;
};
