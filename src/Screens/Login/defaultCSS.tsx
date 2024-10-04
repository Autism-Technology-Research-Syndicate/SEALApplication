import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);
  const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
      flex: 2,
      rowGap: 50,
      justifyContent: 'center',
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
      marginTop: 20,
    },
  });

  return stylesheet;
};
