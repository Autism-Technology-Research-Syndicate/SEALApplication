import { View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import TextField from '../../Components/TextField/.';
import styles from './defaultCSS';
import { accountSignUp } from './data';
import Text from '../../Components/Text/.';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>
          Account Sign up
        </Text>

        <View style={styles.body}>
          {accountSignUp.map((item, idx) => {
            return (
              <TextField key={idx} name={item.id} placeholder={item.placeHolder} />
            )
          })}
        </View>
        <Button dark title='Sign up' />

      </View>

    </BackgroundWrapper>
  );
};

export default Index;


