import {StyleSheet} from 'react-native';
import {FontConfigType} from '../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
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

  const background = {
    colorList: Object.values(colorRange).slice(-4),
  };

<<<<<<< HEAD
const darkground = {
    // darkColor: Object.values(colorRange).slice(6,9)
    darkColor: [
        colorRange.VerySoftBlue,
        colorRange.LightGrayishBlue,
        colorRange.DarkModerateBlue
        // colorRange. DarkModerateCyan
    ]
}

const stylesheet = StyleSheet.create({
=======
  const stylesheet = StyleSheet.create({
>>>>>>> origin/pre-alpha
    container: {
      height: '100%',
      width: '100%',
      rowGap: 10,
      padding: 30,
    },
    ...colorRange,
    ...background,
    ...darkground,
    defaultColor: colorRange.VeryDarkDesaturatedBlue,
    defaultText: {
      fontFamily: fontConfig.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
    textNormal: {
      fontFamily: fontConfig.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontSize: 20 * fontConfig.fontScale,
      fontStyle: 'normal',
    },
    textBold: {
      fontFamily: fontConfig.bold,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontSize: 20 * fontConfig.fontScale,
    },
    headerText: {
      fontSize: 33 * fontConfig.fontScale,
      fontFamily: fontConfig.bold,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
    subheaderText: {
      fontSize: 21 * fontConfig.fontScale,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontFamily: fontConfig.bold,
    },
    content: {
      fontSize: 18 * fontConfig.fontScale,
      fontFamily: fontConfig.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
  });
  return stylesheet;
};
