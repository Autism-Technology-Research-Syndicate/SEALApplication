import { View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Carousel from '../../Features/Carousel';
import { Appbar } from 'react-native-paper';
import styles from './defaultCSS';
import data from './data';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
      <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
      <Carousel data={data} />
      </View>
    </BackgroundWrapper>
  );
};

export default Index;


