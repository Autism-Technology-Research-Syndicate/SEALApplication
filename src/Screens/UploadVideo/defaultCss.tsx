import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: { ...styles.container },
    body: {
        flex: 2,
        rowGap: 30,
        overflow: 'scroll'
    },
    upper_body:
    {
        justifyContent: 'center',
        rowGap: 20

    },
    bottom_body:
    {
        rowGap: 20
    },
    middle_body:
    {
        rowGap: 10
    },
    header: {
        ...styles.subheaderText,
        paddingBottom: 30
    },
    bottom_section: {
        justifyContent: 'flex-end',
        rowGap: 20
    },

    input: {
        height: 50,
        padding: 10,
        fontSize: 15,
        borderRadius: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,

    }
});
export default stylesheet;