import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import {useAuth} from '../../Components/Authentication/AuthProvider';
import ProtectedRoute from '../../Components/Authorization/ProtectedRoute';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import {Appbar, Icon} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';

const Index = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {selectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);
  const {currentUser} = useAuth();

  const {width, height} = Dimensions.get('window');

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <ProtectedRoute allowedRoles={['admin', 'viewer']}>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}>
          <Icon size={30} source="cog" />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.section}>
            {/* <Text style={styles.header}>Welcome, {currentUser.name}</Text> */}
            <Text style={styles.subheader}>Activities</Text>
            <View style={width > 640 ? styles.row : styles.col}>
              <View style={styles.rowItem}>
                <PracticeSession />
                {/* <Text style={styles.itemTitle}>Practice sessions</Text> */}
                <Text style={styles.itemTitle}>Practice sessions</Text>
                <Text style={styles.itemText}>
                  Focused practices, skill builders, step-by-step sessions and
                  'repeat & refine'
                </Text>
              </View>
              <View style={styles.rowItem}>
                <AssignTasks />
                <Text style={styles.itemTitle}>Assigned tasks</Text>

                <Text style={styles.itemText}>
                  Complete the tasks assigned to you by your teacher
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Button
              title="Eye contact practice"
              icon="eye"
              onPress={() => navigation.navigate('Welcome')}
            />
            <Button
              light
              title="Achievements"
              icon="trophy"
              onPress={() => navigation.navigate('Achievements')}
            />

            {/*Test button: Comment it to remove it. Will need to change Settings to 'NONE' before to remove filter*/}
            <Button
              title="Colorblind Settings"
              onPress={() => navigation.navigate('ColorblindSettings')}
            />
          </View>
        </View>
      </ProtectedRoute>
    </BackgroundWrapper>
  );
};

export default Index;
