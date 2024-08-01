import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        rowGap: 10,
        padding: 10,

    },
    subheader: {
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        alignSelf: 'center',
        color: '#305070'

    },
    header: {
        fontFamily: 'Comic Neue',
        fontSize: 27,
        fontStyle: 'normal',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#305070'
    },
    middle_section: {
        paddingBottom: 25,
        rowGap: 20,
        alignSelf: 'center'
    },
    bottom_up: { 
        flex: 1, 
        justifyContent: 'flex-end', 
        rowGap: 10 
    }
});
export default styles;