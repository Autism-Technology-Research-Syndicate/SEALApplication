import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

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
