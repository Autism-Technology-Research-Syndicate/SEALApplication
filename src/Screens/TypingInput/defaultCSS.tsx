import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';


export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
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
return stylesheet;
};
