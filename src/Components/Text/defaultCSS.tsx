import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
     text: {
        fontFamily: styles.textNormal.fontFamily,
        fontSize: styles.textNormal.fontSize,
        fontStyle: styles.textNormal.fontStyle,
        fontWeight: 'normal',
        color: styles.textNormal.color
    },
});

export default stylesheet;
