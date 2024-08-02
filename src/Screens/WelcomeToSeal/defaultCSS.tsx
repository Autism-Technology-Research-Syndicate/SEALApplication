import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
    container: {...styles.container},
    middle_section: {
        alignSelf: 'center',
        justifyContent: 'center',
        rowGap: 10,
        flex: 2
    },
    bottom_section: { 
        justifyContent: 'flex-end', 
        rowGap: 10 
    }
});
export default stylesheet;