import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontFamilyType} from '../../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
  const styles = getDefaultStyles(fontFamily);
  const stylesheet = StyleSheet.create({
    container: {...styles.container},
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
    header: {
      fontFamily: fontFamily.bold,
      color: styles.defaultColor,
      fontSize: 40,
    },
    subheader: {
      fontFamily: fontFamily.regular,
      color: styles.defaultColor,
      fontSize: 30,
      paddingBottom: 20,
      paddingTop: 5,
    },
    bottom_section: {
      justifyContent: 'flex-end',
      rowGap: 20,
    },
  });

  return stylesheet;
};
