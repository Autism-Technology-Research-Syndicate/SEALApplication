import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    buttonGroup: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 0, // Adjust to reduce or increase space
        marginBottom: 0,
      },
    buttonContainer: {
        paddingBottom: 0,
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 0,
        marginTop: 5,
      },
    button:{
        padding: 0,
        borderRadius: 10,
        alignItems: 'center',
        margin: 5,
    },
    buttonText: {
        fontSize: 20, // Default font size for other buttons
        // color: '#fff',
        fontWeight: 'bold',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop:0,
    },
    centerContent: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 0,
        marginTop:0,
    },
    text: {
        textAlign: 'justify',
        lineHeight: 30,
        // fontSize: 20,
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
        ...styles.subheaderText
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