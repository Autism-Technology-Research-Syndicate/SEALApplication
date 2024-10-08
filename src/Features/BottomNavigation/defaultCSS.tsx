import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    nav:{
      backgroundColor: styles.VeryDarkDesaturatedBlue,
      highLight: styles.DarkModerateCyan,
      inActive: styles.White
    },
    icon:{
      fontSize: 15,
      fontStyle: styles.textNormal.fontStyle,
      color: styles.White
    },
    middle: {position: 'absolute', top: '-50%', height: 70, width: 70, backgroundColor: '#29fd53'}

});

export default stylesheet;
