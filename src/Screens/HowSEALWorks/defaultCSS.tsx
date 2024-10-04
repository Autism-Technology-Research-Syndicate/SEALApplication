import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);

  const stylesheet = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      paddingBottom: 10,
    },
  });
  return stylesheet;
};
