import { StyleSheet } from 'react-native';
import styles from '../style/defaultCSS';


const stylesheet = StyleSheet.create({
    light:{...styles.light},
    dark: {...styles.dark},
    opacityLight:{...styles.opacityLight},
    opacityNormal:{ ...styles.opacityNormal},
     text: {
        fontFamily: styles.textNormal.fontFamily,
        fontSize: styles.textNormal.fontSize,
        fontStyle: styles.textNormal.fontStyle,
        fontWeight: 'bold',
        textDecorationLine:'underline',
        color: styles.textNormal.color
     
    },
});

export default stylesheet;
