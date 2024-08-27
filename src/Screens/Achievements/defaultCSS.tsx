import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

// console.log('scaleWidth:', scaleWidth);
// console.log('scaleHeight:', scaleHeight);

const fontSize = 18; // Example font size
const headerFontSize = 27; // Example font size
const letterSpacing = fontSize * 0.02; // 2% of font size
const letterSpacingHeader = fontSize * -0.02; // 3% of font size

const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    textNormal: { ...styles.textNormal },
    header: {
        // ...styles.defaultText,
        textAlign: 'center',
        // padding: 10,
        fontFamily: 'comic Neue',
        fontSize: 27,
        fontWeight: 'normal',
        lineHeight: 31.05,
        letterSpacing: letterSpacingHeader,
    },
    subheader: {
        // ...styles.defaultText,
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21.98,
        letterSpacing: letterSpacing,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        flexGrow: 1,
    },

    itemText: {
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        fontWeight: '700',
        fontSize: 16,
        padding: 5,
        lineHeight: 18.6,
    },

    rowItem: {
        paddingTop: 49,
        gap: 15,
        borderColor: styles.defaultColor,
        borderWidth: 0.5,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flex: 1,
        paddingBottom: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    section:{
        rowGap: 39,
        padding: 30,
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // award: {
    //     // rowGap: 10,
    // },
    // achievements: {
    //     textAlign: 'center',
    // },
});
export default stylesheet;
