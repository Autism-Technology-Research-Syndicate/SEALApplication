import { StyleSheet } from 'react-native';


const stylesheet = StyleSheet.create({
    activeButton: {
        height: 50,
        flexShrink: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: 'rgba(48, 80, 112, 1)',
        opacity: 0.85

    },
    text: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'rgba(245, 245, 245, 1)',
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlignVertical: 'center'
    },
});

export default stylesheet;
