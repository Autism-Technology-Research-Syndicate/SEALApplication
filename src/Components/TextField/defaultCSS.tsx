import { StyleSheet } from 'react-native';
import styles from '../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
        borderWidth: .5,
        padding: 10,
        gap: 15
      , ...styles.border},
      placeholder: {
        color: '#305070',
        fontSize: styles.textNormal.fontSize,
      },
      backgroundColor: {backgroundColor: 'black'}
});

export default stylesheet;
