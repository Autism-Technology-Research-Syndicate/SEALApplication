import {StyleSheet} from 'react-native';
import {FontFamilyType} from '../Contexts/FontContext';

export const getStyles = (fontFamily: FontFamilyType) => {
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
      fontFamily: fontFamily.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
    textNormal: {
      fontFamily: fontFamily.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontSize: 14,
      fontStyle: 'normal',
    },
    textBold: {
      fontFamily: fontFamily.bold,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontSize: 14,
    },
    headerText: {
      fontSize: 20,
      fontFamily: fontFamily.bold,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
    subheaderText: {
      fontSize: 15,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontFamily: fontFamily.bold,
    },
    content: {
      fontSize: 13,
      fontFamily: fontFamily.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
  });
  return stylesheet;
};
