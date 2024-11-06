import {StyleSheet} from 'react-native';
import { getStyles } from '../../Styles/defaultCSS';
import {FontConfigType, useFontContext} from '../../Contexts/FontContext';
// import { fontConfig } from 'react-native-paper/lib/typescript/styles/fonts';

const fontConfig: FontConfigType = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic',
  bolditalic: 'Roboto-BoldItalic',
  fontScale: 1,
};

const styles = getStyles(fontConfig);


const stylesheet = StyleSheet.create({
  container: {
    ...styles.container,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    padding: 15,
    borderWidth: 0.5,
    gap: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'white',
  },
  curriculum: {
    alignSelf: 'center',
    paddingBottom: 20,
    fontSize: 20,
  },
});

export default stylesheet;