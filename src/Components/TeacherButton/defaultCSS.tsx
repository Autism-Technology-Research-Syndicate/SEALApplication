import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderColor: 'black', 
        borderWidth: 2,   
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    dimensions: { height: 50},
    text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
    },
    icon: { color: 'black' },
});

export default stylesheet;
