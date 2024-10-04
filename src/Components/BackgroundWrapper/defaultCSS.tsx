import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

  const stylesheet = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      opacity: 1,
      colorList: styles.colorList,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
  });
  return stylesheet;
};
