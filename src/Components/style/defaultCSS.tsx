import { StyleSheet } from 'react-native';


const stylesheet = StyleSheet.create({
    border: {
        height: 50,
        flexShrink: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    dark: { backgroundColor: 'rgba(48, 80, 112, 1)' },
    light: { backgroundColor: 'rgba(132, 182, 207, 1)' },
    opacityLight: { opacity: 0.85 },
    opacityNormal: { opacity: 1 },
    textNormal: {
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        fontStyle: 'normal',
        color: '#305070'
    },
});

export default stylesheet;
