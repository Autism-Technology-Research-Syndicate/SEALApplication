import { View, Button } from 'react-native';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import React from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import styles from './defaultCSS';
import Trophy from '../../Assets/svg/Trophy.svg';
import Award from '../../Assets/svg/Award.svg';
import { Appbar } from 'react-native-paper';
import useAchievements from './data';
import { useNotification } from '../../Features/useNotification';


interface Achievement {
  id: number;
  name: string;
  description: string;
  points: number;
  user_id: number;
}

const AchievementsList = ({ achievements }: { achievements: Achievement[] }) => (
  <View>
    {achievements.map((item) => (
      <View key={item.id} >
        <Text style={styles.itemText}>• {item.points} {item.description}</Text>
      </View>
    ))}

  </View>
);

// async function onDisplayNotification() {
//   // Request permissions (required for iOS)
//   await notifee.requestPermission()

//   // Create a channel (required for Android)
//   const channelId = await notifee.createChannel({
//     id: 'default',
//     name: 'Default Channel',
//   });

//   // Display a notification
//   await notifee.displayNotification({
//     title: 'Notification Title',
//     body: 'Main body content of the notification',
//     android: {
//       channelId,
//       // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
//       // pressAction is needed if you want the notification to open the app when pressed
//       pressAction: {
//         id: 'default',
//       },
//     },
//   });
// }

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user_id = 1; //replace with the actual user id of the logged in user
  const { achievements, loading, error } = useAchievements(user_id);
  const { displayNotification } = useNotification();

  const handleNotification = () => {
    displayNotification('Test Title', 'This is a test notification');
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading achievements</Text>;
  }

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <View style={styles.container}>
          <Text style={styles.header}>Well done!</Text>
        <View style={styles.section}>
          <View style={{ flex: 1 }}>
          <View style={styles.row}>
          <Trophy />
          <Text style={styles.subheader}> Achievements</Text>
          </View>
          </View>
            <View style={styles.rowItem}>
              <Award/>
              <View style={{ flex: 1 }}>
                <AchievementsList achievements={achievements} />
      <Button title="Display Notification" onPress={handleNotification} />

              </View>
            </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
