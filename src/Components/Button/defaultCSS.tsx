import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({

    button: {...styles.border},
    dimensions: {height:50},
    icon: {color: 'white'},
    light:{...styles.light},
    dark: {...styles.dark},
    opacityLight:{...styles.opacityLight},
    opacityNormal:{ ...styles.opacityNormal},
    disabled: {...styles.disabled},
    icon:{
        color: 'rgba(245, 245, 245, 1)'
    },
     text: {
        color: 'rgba(245, 245, 245, 1)',
        fontFamily: styles.textNormal.fontFamily,
        fontSize: styles.textNormal.fontSize,
        fontStyle: styles.textNormal.fontStyle,
        fontWeight: '700',
    },
});

export default stylesheet;
