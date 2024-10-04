import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import {getStyles} from './defaultCSS';
import Trophy from '../../Assets/svg/Trophy.svg';
import Award from '../../Assets/svg/Award.svg';
import {Appbar} from 'react-native-paper';
import {fetchAchievements} from './data';
import {useFontContext} from '../../Contexts/FontContext';

interface Achievement {
  id: number;
  name: string;
  description: string;
  points: number;
  user_id: number;
}

const AchievementsList = ({
  achievements,
  styles,
}: {
  achievements: Achievement[];
  styles: Object;
}) => (
  <View>
    {achievements.map(item => (
      <View key={item.id}>
        <Text style={styles.itemText}>
          • {item.points} {item.description}
        </Text>
      </View>
    ))}
  </View>
);

const Index: React.FC<{navigation: any}> = ({navigation}) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const styles = getStyles(selectedFontFamily);

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        const userId = 1; // Replace with the actual user ID of logged in user
        const userAchievements = await fetchAchievements(userId);
        setAchievements(userAchievements);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      }
    };

    loadAchievements();
  }, []);

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.navigate('PersonalPage')} />
      <View style={styles.container}>
        <Text style={styles.header}>Well done!</Text>
        <View style={styles.section}>
          <View style={{flex: 1}}>
            <View style={styles.row}>
              <Trophy />
              <Text style={styles.subheader}> Achievements</Text>
            </View>
          </View>
          <View style={styles.rowItem}>
            <Award />
            <View style={{flex: 1}}>
              <AchievementsList achievements={achievements} styles={styles} />
            </View>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
