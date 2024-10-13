import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
    fontStyle: styles.textNormal.fontStyle,
    container: {
        backgroundColor: '#FFFFFF',
        fontSize: styles.textNormal.fontSize,
        fontWeight: 500
    },
});

export default stylesheet;
