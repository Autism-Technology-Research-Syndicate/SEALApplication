import {StyleSheet} from 'react-native';
import {FontConfigType} from '../Contexts/SettingsContext';

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
      fontFamily: fontConfig.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
    },
    textNormal: {
      fontFamily: fontConfig.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontSize: 20 * fontConfig.fontScale,
      lineHeight:
        20 *
        fontConfig.fontScale *
        (fontConfig.regular === 'OpenDyslexic Regular' ? 1.6 : 1),
      // fontStyle: 'normal',
    },
    textBold: {
      fontFamily: fontConfig.bold,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontSize: 20 * fontConfig.fontScale,
      lineHeight:
        20 *
        fontConfig.fontScale *
        (fontConfig.regular === 'OpenDyslexic Regular' ? 1.6 : 1),
    },
    headerText: {
      fontSize: 33 * fontConfig.fontScale,
      fontFamily: fontConfig.bold,
      color: colorRange.VeryDarkDesaturatedBlue,
      lineHeight:
        33 *
        fontConfig.fontScale *
        (fontConfig.regular === 'OpenDyslexic Regular' ? 1.6 : 1),
    },
    subheaderText: {
      fontSize: 21 * fontConfig.fontScale,
      color: colorRange.VeryDarkDesaturatedBlue,
      fontFamily: fontConfig.bold,
      lineHeight:
        21 *
        fontConfig.fontScale *
        (fontConfig.regular === 'OpenDyslexic Regular' ? 1.6 : 1),
    },
    content: {
      fontSize: 18 * fontConfig.fontScale,
      fontFamily: fontConfig.regular,
      color: colorRange.VeryDarkDesaturatedBlue,
      lineHeight:
        18 *
        fontConfig.fontScale *
        (fontConfig.regular === 'OpenDyslexic Regular' ? 1.6 : 1),
    },
  });
  return stylesheet;
};
