import { StyleSheet } from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    textNormal: { ...styles.textNormal },
    header: {
        ...styles.defaultText,
        textAlign: 'center',
        padding: 10,
        fontSize: 33,
        fontWeight: 'bold'
    }
  });
  return stylesheet;
};