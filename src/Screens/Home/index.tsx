// src/Screens/Home/index.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeToSeal from '../WelcomeToSeal';
import Login from '../Login';
import PersonalPage from '../PersonalPage';
import AccountSignUp from '../AccountSignUp';
import HowSealWorks from '../HowSEALWorks';
import WebCamFeed from '../../Components/WebCamFeed';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (

      <Stack.Navigator initialRouteName="WebCamFeed" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeToSeal}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Personal" component={PersonalPage}  />
        <Stack.Screen name="AccountSignUp" component={AccountSignUp}  />
        {/* the "Main "screen below renders the bottom Nav which wraps the relevant pages it is included on */}
        <Stack.Screen name="Main" component={BottomNav}  />
        <Stack.Screen name="HowSealWorks" component={HowSealWorks}  />
        {/* Commented for testing, to enable camera feed uncomment this */}
        {/* <Stack.Screen name="WebCamFeed" component={WebCamFeed}  /> */}

      </Stack.Navigator>
  );
};

export default Index;
