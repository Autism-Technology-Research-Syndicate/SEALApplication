import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);
  const stylesheet = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    textNormal: {...styles.textNormal},
    header: {
      ...styles.textBold,
      textAlign: 'center',
      padding: 10,
      fontSize: 33 * fontConfig.fontScale,
    },
    subheader: {
      ...styles.subheaderText,
    },
    col: {
      flexDirection: 'col',
      gap: 15,
      flexGrow: 1,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      gap: 15,
      flexGrow: 1,
    },
    itemTitle: {
      // fontWeight: 'bold',
      ...styles.textBold,
      fontSize: 20 * fontConfig.fontScale,
      padding: 5,
      paddingHorizontal: 30,
      textAlign: 'center',
    },
    itemText: {
      ...styles.content,
      fontSize: 16 * fontConfig.fontScale,
      padding: 5,
      textAlign: 'center',
    },
    rowItem: {
      borderColor: styles.defaultColor,
      borderWidth: 0.5,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      flex: 1,
      padding: 15,
      alignItems: 'center',
      textAlign: 'center',
    },
    section: {
      rowGap: 15,
      padding: 30,
    },
    settingsButton: {
      position: 'absolute',
      zIndex: 1,
      top: 10,
      right: 10,
      padding: 10,
    },
  });
  return stylesheet;
};
