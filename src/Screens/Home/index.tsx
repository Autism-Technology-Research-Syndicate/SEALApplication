import { Text} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import styles from './defaultCSS';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const index = () => {
  return (
    <BackgroundWrapper>
      <Text style={styles.text}>Inside</Text>
      <Button />
    </BackgroundWrapper>
  );
};

export default index;
