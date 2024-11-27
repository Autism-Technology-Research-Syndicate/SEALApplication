import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    text: {
      fontFamily: styles.textNormal.fontFamily,
      fontSize: styles.textNormal.fontSize,
      fontStyle: styles.textNormal.fontStyle,
      fontWeight: 'normal',
      color: styles.defaultColor,
    },
  });
  return stylesheet;
};
