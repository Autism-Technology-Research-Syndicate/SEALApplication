import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Helvetica Neue',
        marginBottom: 12,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    input: {
        height: 50,
        width: '95%',
        borderColor: 'black',
        borderWidth: 2,   
        borderRadius: 12,
        marginBottom: 12,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
    buttonSpacing: {
        marginHorizontal: 8,
        marginVertical: 8,
    },
});

export default stylesheet;
