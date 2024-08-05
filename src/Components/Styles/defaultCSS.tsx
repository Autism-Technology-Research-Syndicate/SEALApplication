import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
    border: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    dark: { backgroundColor: 'rgba(48, 80, 112, 1)' },
    light: { backgroundColor: 'rgba(132, 182, 207, 1)' },
    opacityLight: { opacity: 0.85 },
    opacityNormal: { opacity: 1 },
    textNormal: styles.textNormal,
    defaultColor: styles.defaultColor

});

export default stylesheet;
