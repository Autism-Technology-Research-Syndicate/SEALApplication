import { Image, View } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import styles from './defaultCSS';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>
            Welcome, James
          </Text>
          <Text style={styles.subheader}>
            Activities
          </Text>
          <View style={styles.row}>
            <View style={styles.rowItem}>
              <Image source={require('../../Assets/images/videotutoring.png')} />
              <Text style={styles.itemTitle}>
                Practice sessions
              </Text>
              <Text style={styles.itemText}>
                Focused practices, skill builders, step-by-step sessions and 'repeat & refine'
              </Text>
            </View>
            <View style={styles.rowItem}>
              <Image source={require('../../Assets/images/checklist.png')} />
              <Text style={styles.itemTitle}>
                Assigned tasks
              </Text>
              <Text style={styles.itemText}>
                Complete the tasks assigned to you by your teacher
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Button title='Eye contact practice' onPress={() => navigation.navigate('Welcome')} />
          <Button light title='Achievements' onPress={() => navigation.navigate('Welcome')} />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;


