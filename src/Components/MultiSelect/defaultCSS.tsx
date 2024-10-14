import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
    fontStyle: styles.textNormal.fontStyle,
    container: {
        backgroundColor: '#FFFFFF',
        fontSize: styles.textNormal.fontSize,
        fontWeight: 500,
        color: '#050505',
    },
});

export default stylesheet;
