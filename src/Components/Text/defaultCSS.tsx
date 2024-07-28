import { StyleSheet } from 'react-native';
import styles from '../style/defaultCSS';


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
