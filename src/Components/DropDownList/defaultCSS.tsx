import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/SettingsContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    dropDown: {
      marginBottom: 15,
      borderColor: '#305070',
    },
    labels: {
      fontSize: 15 * fontConfig.fontScale,
    },
  });

  return stylesheet;
};
