import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
      flex: 2,
      rowGap: 30,
      overflow: 'scroll',
      fontFamily: fontConfig.regular,
    },
    upper_body: {
      justifyContent: 'center',
      rowGap: 20,
    },
    bottom_body: {
      rowGap: 20,
    },
    middle_body: {
      rowGap: 10,
    },
    header: {
      ...styles.subheaderText,
      paddingBottom: 30,
    },
    bottom_section: {
      justifyContent: 'flex-end',
      rowGap: 20,
    },
  });
  return stylesheet;
};
