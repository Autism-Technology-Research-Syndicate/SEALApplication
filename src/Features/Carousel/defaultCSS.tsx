import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    pagination: {flex: 1},
    container: {
      width: width,
      minHeight: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    image: {
      flex: 0.6,
      width: '100%',
    },
    content: {
      flex: 0.4,
      rowGap: 20,
      alignItems: 'center',
    },
    title: {...styles.headerText, textAlign: 'center'},
    description: {...styles.textNormal, textAlign: 'center'},
  });
  return stylesheet;
};
