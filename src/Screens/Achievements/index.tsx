import {View} from 'react-native';
import React from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';
import Trophy from '../../Assets/svg/Trophy.svg';
import Award from '../../Assets/svg/Award.svg';
import {Appbar} from 'react-native-paper';
import useAchievements from './data';
import {NavigationProp} from '@react-navigation/native';

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

const Index: React.FC<{navigation: NavigationProp<any>}> = ({navigation}) => {
  const {selectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);
  const user_id = 1; //replace with the actual user id of the logged in user
  const {achievements, loading, error} = useAchievements(user_id);

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
