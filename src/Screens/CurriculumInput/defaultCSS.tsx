import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Helvetica Neue',
        marginBottom: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonSpacing: {
        marginHorizontal: 8,
        marginVertical: 8,
    },
});

export default stylesheet;
