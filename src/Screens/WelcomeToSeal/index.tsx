import { Image, View, Text } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import styles from './defaultCSS';
import Seal from '../../Assets/svg/seal.svg';
import Hello from '../../Assets/svg/hello.svg';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>

      <View style={styles.container}>
        <View style={styles.body}>
          <Seal width={85} height={85} />
          <View style={styles.middle_section}>
            <Text style={styles.header} >
              Welcome to SEAL
            </Text>
        </View>
        <Text style={styles.subheader}>
          (Special Education Assistive Learning)
        </Text>
        <Hello width={275} height={275} />
      </View>
      <View style={styles.bottom_section}>
        <Button title='Learner login' onPress={() => navigation.navigate('Login')} />
        <Button light title='Teacher login' />
      </View>
    </View>
    </BackgroundWrapper >
  );
};

export default Index;


