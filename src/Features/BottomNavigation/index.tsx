import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import PersonalPage from '../../Screens/PersonalPage';
import AccountSignUp from '../../Screens/AccountSignUp';
import {getStyles} from './defaultCSS';
import {HomeStackNavigator, ProfileStackNavigator} from '../StackNavigators';
import Settings from '../../Screens/Settings';
import {useSettingsContext} from '../../Contexts/SettingsContext';

export default function Index() {
  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: styles.nav.highLight,
    tabBarInactiveTintColor: styles.nav.inActive,
    tabBarLabelStyle: {
      ...styles.icon,
    },
    tabBarStyle: {
      backgroundColor: styles.nav.backgroundColor,
      paddingVertical: 5,
      height: 80,
    },
    tabBarItemStyle: {
      backgroundColor: styles.nav.backgroundColor,
      paddingVertical: 5,
    },
  };
  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon source="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Join a classroom"
        component={PersonalPage}
        options={{
          tabBarLabel: 'Join a classroom',
          tabBarIcon: ({color, size}) => {
            return <Icon source="cast-education" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => {
            return <Icon source="account-box" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => {
            return <Icon source="cog" size={size} color={color} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}
