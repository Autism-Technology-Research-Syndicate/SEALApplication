import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon, IconButton, BottomNavigation } from 'react-native-paper';

//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonalPage from '../../Screens/PersonalPage';
import AccountSignUp from '../../Screens/AccountSignUp';
import styles from './defaultCSS';

import BottomNavBGImg from '../../Assets/svg/BottomNavbgimg.svg';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "white",
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
