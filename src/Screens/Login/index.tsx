import { Image, View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import LinkButton from '../../Components/LinkButton/.';
import TextField from '../../Components/TextField/.';
import Text from '../../Components/Text/.';
import styles from './defaultCSS';

const index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>

        <View style={styles.section}>
          <TextField placeholder="username" />
          <TextField placeholder="password" />
        </View>
        <LinkButton title='Forget password?' style={{textAlign: 'right'}} onPress={() => navigation.navigate('Welcome')}  />

        <View style={styles.section}>
          <Button title='Submit' onPress={() => navigation.navigate('Personal')} />

          <Text  style={{textAlign: 'center'}}>
            Dont' have an account?
          </Text>
          <LinkButton title='Sign up' style={{textAlign: 'center'}} onPress={() => navigation.navigate('Welcome')} />

          <Button light title='How SEAL works...' />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default index;


