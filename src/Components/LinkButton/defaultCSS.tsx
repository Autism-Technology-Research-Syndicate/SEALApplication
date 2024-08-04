import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
     text: {
        color: styles.defaultColor,
        fontSize: styles.textNormal.fontSize,
        fontStyle: styles.textNormal.fontStyle,
        fontWeight: 'bold',
        textDecorationLine:'underline'
        
    },
});

export default stylesheet;
