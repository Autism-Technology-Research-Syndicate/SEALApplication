import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import styles from './defaultCSS';
import WelcomeToSeal from '../WelcomeToSeal';

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: '#305070', color: '#ffffff' }
      }}>
        <Tab.Screen name="Home"  options={{tabBarLabel:'Home',  tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"white"} size={30} />
          ),}} component={WelcomeToSeal} />
        <Tab.Screen name="JoinClassroom"  options={{tabBarLabel:'Join a classroom'}}  component={WelcomeToSeal} />
        <Tab.Screen name="Profile" options={{tabBarLabel:'Profile'}}  component={WelcomeToSeal} />
      </Tab.Navigator>
    </BackgroundWrapper>
  );
};

export default Index;


