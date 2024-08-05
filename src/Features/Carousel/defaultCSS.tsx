import { StyleSheet, Dimensions } from 'react-native';
import styles from '../../Styles/defaultCSS';
const {width, height} = Dimensions.get('screen');

const stylesheet = StyleSheet.create({
    pagination: {flex: 1},
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
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
      title: { ...styles.headerText,  textAlign: 'center' },
      description: { ...styles.textNormal,  textAlign: 'center' }
});
export default stylesheet;