import { Image, View, Text } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import TextField from '../../Components/TextField/.';
import styles from './defaultCSS';

const index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>

        <View style={{ flex: 1, justifyContent: 'flex-end', rowGap: 10 }}>
          <TextField placeholder="username" />
          <TextField placeholder="password" />
        </View>
        <Text>
          Forget password?
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end', rowGap: 10 }}>
          <Button title='Submit' onPress={() => navigation.navigate('Login')} />
          <Text>
            Dont' have an account?
          </Text>
          <Text>
            Sign-up
          </Text>
          <Button light title='How SEAL works...' />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default index;


