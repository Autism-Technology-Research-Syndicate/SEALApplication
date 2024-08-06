import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon} from 'react-native-paper';
import PersonalPage from '../../Screens/PersonalPage';
import AccountSignUp from '../../Screens/AccountSignUp';
import styles from './defaultCSS';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: styles.nav.highLight,
  tabBarInactiveTintColor: styles.nav.inActive,
  tabBarLabelStyle: {
    ...styles.icon
  },
  tabBarStyle: {
    backgroundColor: styles.nav.backgroundColor,
    paddingVertical: 5,
    height: 80
  },
  tabBarItemStyle: {
    backgroundColor: styles.nav.backgroundColor,
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default function Index() {
  return (
    <Tab.Navigator
      {...{ screenOptions }}
    >
      <Tab.Screen
        name="Home"
        component={PersonalPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={size} color={color} style={styles.icon} />;
          },
        }}
      />
      <Tab.Screen
        name="Join a classroom"
        component={PersonalPage}
        options={{
          tabBarLabel: 'Join a classroom',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cast-education" size={size} color={color} style={styles.middle} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountSignUp}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="account-box" size={size} color={color} style={styles.icon} />;
          },
        }}
      />

    </Tab.Navigator>
  );
}
