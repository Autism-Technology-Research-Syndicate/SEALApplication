import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    textNormal: { ...styles.textNormal },
    header: {
        ...styles.defaultText,
        textAlign: 'center',
        padding: 10,
        fontSize: 33,
        fontWeight: 'bold'
    },
    subheader: {
        ...styles.defaultText,
        fontSize: 22,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        gap: 15,
        flexGrow: 1
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        paddingHorizontal: 30,
        textAlign: 'center',
        ...styles.defaultText,
    },
    itemText: {
        fontSize: 16,
        padding: 5,
        textAlign: 'center',
        ...styles.content
    },
    rowItem: {
        borderColor: styles.defaultColor,
        borderWidth: .5,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flex: 1,
        padding: 15,
        alignItems: 'center',
        textAlign: 'center',
    },
    section:
    {
        rowGap: 15,
        padding: 30,

    }
});
export default stylesheet;
