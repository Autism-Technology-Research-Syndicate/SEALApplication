import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        rowGap: 10,
        padding: 30,
    },
    defaultColor: '#305070',
    defaultText:{
        fontFamily: 'sans-serif-condensed',
        color: '#305070',
    },
    textNormal: {
        fontFamily: 'sans-serif',
        color: '#305070',
        fontSize: 20,
        fontStyle: 'normal',
       
    },
    headerText: {
        fontSize: 33,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#305070',
    },
    subheaderText: {
        fontSize: 22,
         fontWeight: 'bold',
         color: '#305070',
         fontFamily: 'sans-serif',
         color: '#305070',
    }, 
    content: {
        fontSize: 18,
        fontFamily: 'sans-serif',
        color: '#305070'
    }
});

export default stylesheet;
