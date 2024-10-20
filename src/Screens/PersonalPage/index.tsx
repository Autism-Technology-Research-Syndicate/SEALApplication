import {Image, View} from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import { useAuth } from '../../Components/Authentication/AuthProvider';
import ProtectedRoute from '../../Components/Authorization/ProtectedRoute';
import { getStyles } from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import {Appbar} from 'react-native-paper';

const Index = ({navigation}) => {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);
  const { currentUser } = useAuth();

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <ProtectedRoute allowedRoles={['admin', 'viewer']}>
      <View style={styles.container}>
        <View style={styles.section}>
          {/* <Text style={styles.header}>Welcome, {currentUser.name}</Text> */}
          <Text style={styles.subheader}>Activities</Text>
          <View style={styles.row}>
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
          <Button title='Settings' onPress={() => navigation.navigate('Settings')} />

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
