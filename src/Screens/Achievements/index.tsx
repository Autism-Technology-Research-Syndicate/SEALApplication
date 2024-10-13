import { View, Button } from 'react-native';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import React from 'react';
import { useRef, useEffect, useState } from 'react';
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
  // console.log(achievements),  // Check if achievements are being passed;

  <View>
    {achievements.map((item) => (
      <View key={item.id} >
        <Text style={styles.itemText}>• {item.points} {item.description}</Text>
      </View>
    ))}

  </View>
);

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user_id = 1; //replace with the actual user id of the logged in user
  const { achievements, loading, error } = useAchievements(user_id);
  const { displayNotification } = useNotification();
  const displayedNotifications = useRef<Set<number>>(new Set());

  useEffect(() => {
    const displayNotifications = async () => {
      if (achievements) {
        for (const achievement of achievements) {
          if (achievement.points > 1 && !displayedNotifications.current.has(achievement.id)) { // Replace 1 with your condition
            console.log(`Displaying notification for: ${achievement.description} with ${achievement.points} points`);
            await displayNotification('Achievement Unlocked', `${achievement.points} ${achievement.description}`);
            displayedNotifications.current.add(achievement.id);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Add a 1-second delay
          }
        }

      }
    };
    displayNotifications();
  }, [achievements, displayNotification]);


  if (loading) {
    return <Text>Loading...</Text>;
  }
  // const handleNotification = (title, body) => {
  //   displayNotification(title, body);
  // };

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
                {/* Button to test calling of notifications */}
      {/* <Button title="Display Notification" onPress={handleNotification} /> */}
              </View>
            </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
