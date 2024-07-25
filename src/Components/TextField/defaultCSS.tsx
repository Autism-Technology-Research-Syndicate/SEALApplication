import { StyleSheet } from 'react-native';
import styles from '../style/defaultCSS';


const stylesheet = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
        borderWidth: .5,
        padding: 10,
        gap: 15
      , ...styles.border},
});

export default stylesheet;
