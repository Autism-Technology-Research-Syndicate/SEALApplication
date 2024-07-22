import { Image, View, Text } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import styles from './defaultCSS';

const index = () => {
  return (
    <BackgroundWrapper>

      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-end', rowGap: 10 }}>
        <View style={{ paddingBottom: 25, rowGap: 20  }}>
          <Image style={{ alignSelf: 'center' }} source={require('../../Assets/images/header_subheaderSeal.png')} />
          <Image style={{ alignSelf: 'center' }} source={require('../../Assets/images/WelcometoSEALimage.png')} />
        </View>
          <Button title='Learner login' />
          <Button title='Teacher login' />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default index;


