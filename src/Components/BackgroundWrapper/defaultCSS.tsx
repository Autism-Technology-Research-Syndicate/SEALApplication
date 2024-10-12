import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

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
