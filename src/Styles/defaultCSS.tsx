import { StyleSheet } from 'react-native';

const colorRange = {
    VerySoftBlue: '#A9C0E8',
    DesaturatedDarkBlue: '#7386A9',
    DarkModerateBlue: '#4C6F9F',
    DarkModerateCyan: '#38A3A5',
    LightGrayishBlue: '#D8D7F9',
    VeryDarkDesaturatedBlue: '#305070',
    White: 'white',
    LightGrayishCyan: '#D2F9F9',
    VeryLightGray: '#f5f5f5',
    LightGrayishOrange: '#F9E2D2',
};

const background =
{
    colorList: [
        colorRange.LightGrayishCyan,
         colorRange.VeryLightGray, 
         colorRange.LightGrayishOrange]
}

const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        rowGap: 10,
        padding: 30,
    },
    ...colorRange,
    ...background,
    defaultColor: colorRange.VeryDarkDesaturatedBlue,
    defaultText: {
        fontFamily: 'sans-serif-condensed',
        color: colorRange.VeryDarkDesaturatedBlue,
    },
    textNormal: {
        fontFamily: 'sans-serif',
        color: colorRange.VeryDarkDesaturatedBlue,
        fontSize: 20,
        fontStyle: 'normal',

    },
    headerText: {
        fontSize: 33,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: colorRange.VeryDarkDesaturatedBlue,
    },
    subheaderText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colorRange.VeryDarkDesaturatedBlue,
        fontFamily: 'sans-serif',
    },
    content: {
        fontSize: 18,
        fontFamily: 'sans-serif',
        color: colorRange.VeryDarkDesaturatedBlue
    }
});

export default stylesheet;
