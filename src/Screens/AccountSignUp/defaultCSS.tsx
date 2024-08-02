import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
        flex: 2,
        rowGap: 30,
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
    header:{
        ...styles.defaultText,
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 30
},
});
export default stylesheet;