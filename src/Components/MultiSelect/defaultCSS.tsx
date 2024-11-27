import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    fontStyle: styles.textNormal.fontStyle,
    container: {
      backgroundColor: '#FFFFFF',
      fontSize: styles.textNormal.fontSize,
      fontWeight: 500,
      color: '#050505',
    },
  });
  return stylesheet;
};
