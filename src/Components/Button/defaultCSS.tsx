import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({

    button: {...styles.border},
    light:{...styles.light},
    dark: {...styles.dark},
    opacityLight:{...styles.opacityLight},
    opacityNormal:{ ...styles.opacityNormal},
     text: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'rgba(245, 245, 245, 1)',
        textAlign: 'center',
        fontFamily: styles.textNormal.fontFamily,
        fontSize: 18,
        fontStyle: styles.textNormal.fontStyle,
        fontWeight: '700',
        textAlignVertical: 'center',
    },
});

export default stylesheet;
