import { Image, View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import LinkButton from '../../Components/LinkButton/.';
import TextField from '../../Components/TextField/.';
import Text from '../../Components/Text/.';
import styles from './defaultCSS';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>

        <View style={styles.body}>
          <View style={styles.upper_body}>
            <TextField placeholder="Please enter username" label="username" />
            <TextField placeholder="Please enter password" label="password" validationType="password"  />
            <LinkButton title='Forget password?' style={{flexDirection: 'row-reverse' }} onPress={() => navigation.navigate('Welcome')} />
          </View>
          <View style={styles.bottom_body}>
            {/* renders the Bottomnav which in turn renders pages once logged in. defaults to the personal page */}
          <Button title='Submit' onPress={() => navigation.navigate('Main')} />

          <View style={styles.middle_body}>
          <Text style={{ textAlign: 'center' }}>
            Dont' have an account?
          </Text>
          <LinkButton title='Sign up' style={{ textAlign: 'center' }} onPress={() => navigation.navigate('AccountSignUp')} />
          </View>
          </View>
        </View>
        <View>

          <Button light title='How SEAL works...'  onPress={() => navigation.navigate('HowSealWorks')} />

        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
