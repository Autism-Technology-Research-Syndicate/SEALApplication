import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        rowGap: 15
    },
    middle_section:{
        rowGap: 15
    },
    header:{
        fontFamily: 'Lucida Grande',
        color: '#305070',
        fontSize: 40,
        fontWeight: 'bold'
    },
    subheader:{
        fontFamily: 'Lucida Grande',
        color: '#305070',
        fontSize: 30,
        fontWeight: '100'
    },
    bottom_section: { 
        justifyContent: 'flex-end', 
        rowGap: 10 
    }
});
export default stylesheet;