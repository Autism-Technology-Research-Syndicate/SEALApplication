import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalPage from '../Screens/PersonalPage';
import AccountSignUp from '../Screens/AccountSignUp';
import Achievements from '../Screens/Achievements';
import WelcomeToSeal from '../Screens/WelcomeToSeal';
import Login from '../Screens/Login';


const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

// The HomeStackNavigator is used to navigate between the PersonalPage, AccountSignUp (eventually profile), and Achievements screens
export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="PersonalPage" screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="PersonalPage" component={PersonalPage} />
      {/* Account signup is still being used as a placeholder for the profile page */}
      <HomeStack.Screen name="AccountSignUp" component={AccountSignUp} />
      <HomeStack.Screen name="Achievements" component={Achievements} />
    </HomeStack.Navigator>
  );
};

// The ProfileStackNavigator is used to navigate between the PersonalPage, AccountSignUp (eventually profile), and Achievements screens
export const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName="AccountSignUp" screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="PersonalPage" component={PersonalPage} />
      <HomeStack.Screen name="AccountSignUp" component={AccountSignUp} />
      <HomeStack.Screen name="Achievements" component={Achievements} />
    </ProfileStack.Navigator>
  );
};
