import { Image, View } from 'react-native';
import { useEffect, useState } from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import styles from './defaultCSS';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import { Appbar } from 'react-native-paper';
import { allUserAchievements } from '../../../Database/dbInitialization';

interface Achievement {
  id: number;
  name: string;
  description: string;
  points: number;
  user_id: number;
}

const Index = ({ navigation }) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const userId = 1; // Replace with the actual user ID of logged in user
        const userAchievements = await allUserAchievements(userId);
        setAchievements(userAchievements);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      }
    };

    fetchAchievements();
  }, []);
  return (
    <BackgroundWrapper>

      <Appbar.BackAction onPress={() => navigation.navigate('Login')} />

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>
            Well done!
          </Text>
          <Text style={styles.subheader}>
            Achievements
          </Text>
          <View style={styles.row}>
            <View style={styles.rowItem}>
              {/* replace below with appropriate icon */}
              <PracticeSession />
              {/* <View style={styles.row}> */}
            {achievements.map((achievement: Achievement) => (
              <View key={achievement.id} style={styles.rowItem}>
                <Text>{achievement.name}</Text>
                <Text>{achievement.description}</Text>
                <Text>{achievement.points}</Text>
              </View>
            ))}
              {/* <Text style={styles.itemTitle}>
                Practice sessions
              </Text>
              <Text style={styles.itemText}>
                Focused practices, skill builders, step-by-step sessions and 'repeat & refine'
              </Text> */}
            {/* </View> */}
            {/* <View style={styles.rowItem}>
             <AssignTasks />
              <Text style={styles.itemTitle}>
                Assigned tasks
              </Text>
              <Text style={styles.itemText}>
                Complete the tasks assigned to you by your teacher
              </Text>
            </View> */}
          </View>
        </View>
        {/* <View style={styles.section}>
          <Button title='Eye contact practice' icon="eye" onPress={() => navigation.navigate('Welcome')} />
          <Button light title='Achievements' icon="trophy" onPress={() => navigation.navigate('Achievements')} />
        </View> */}
      </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
