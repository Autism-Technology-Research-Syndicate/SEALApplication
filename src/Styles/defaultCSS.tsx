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
        fontSize: 20,
        fontStyle: 'normal',
        ...this.defaultText
    },
    content: {
        fontSize: 18,
       ...this.textNormal
    }
});

export default stylesheet;
