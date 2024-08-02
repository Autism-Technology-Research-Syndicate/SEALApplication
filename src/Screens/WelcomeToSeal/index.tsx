import { Image, View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import styles from './defaultCSS';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>

      <View style={styles.container}>
      
          <View style={styles.middle_section}>
            <Image source={require('../../Assets/images/header_subheaderSeal.png')} />
            <Image source={require('../../Assets/images/WelcometoSEALimage.png')} />
          </View>
          <View style={styles.bottom_section}>
          <Button title='Learner login' onPress={() => navigation.navigate('Login')} />
          <Button light title='Teacher login' />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;


