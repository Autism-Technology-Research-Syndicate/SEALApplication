import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: {...styles.container},
    body: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    middle_section:{
        rowGap: 30
    },
    header:{
        fontFamily: 'sans-serif-light',
        color: '#305070',
        fontSize: 40,
        fontWeight: 'bold'
    },
    subheader:{
        fontFamily: 'sans-serif-light',
        color: '#305070',
        fontSize: 30,
        fontWeight: '100',
        paddingBottom: 20,
        paddingTop: 5
    },
    bottom_section: { 
        justifyContent: 'flex-end', 
        rowGap: 10 
    }
});
export default stylesheet;