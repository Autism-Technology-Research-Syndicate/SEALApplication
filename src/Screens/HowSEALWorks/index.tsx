import { View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import styles from './defaultCSS';
import { howItWorks } from './data';
import { Appbar } from 'react-native-paper';


const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
      <View style={styles.container}>
      
      </View>

    </BackgroundWrapper>
  );
};

export default Index;


