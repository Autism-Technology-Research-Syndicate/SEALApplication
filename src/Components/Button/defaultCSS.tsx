import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    button: {...styles.border},
    dimensions: {minHeight: 50},
    icon: {color: 'white'},
    light: {...styles.light},
    dark: {...styles.dark},
    opacityLight: {...styles.opacityLight},
    opacityNormal: {...styles.opacityNormal},
    disabled: {...styles.disabled},
    icon: {
      color: 'rgba(245, 245, 245, 1)',
    },
    text: {
      ...styles.textNormal,
      color: 'rgba(245, 245, 245, 1)',
      textAlignVertical: 'center',
    },
  });
  return stylesheet;
};
