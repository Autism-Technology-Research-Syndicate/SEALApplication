// src/Screens/Home/index.tsx

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColorblindProvider} from '../../Contexts/ColorblindContext';
import ColorblindFilter from '../../Components/ColorblindFilter';

import AuthProvider from '../../Components/Authentication/AuthProvider';

import WelcomeToSeal from '../WelcomeToSeal';
import Login from '../Login';

// import Settings from '../Settings';   Commented as this breaks the app, incorrect imports in the settings component

import PersonalPage from '../PersonalPage';
import CurriculumText from '../CurriculumText';
import AccountSignUp from '../AccountSignUp';
import HowSealWorks from '../HowSEALWorks';
import WebCamFeed from '../../Components/WebCamFeed';
import Break from '../Break';
import BottomNav from '../../Features/BottomNavigation';
import Video from '../Video';
import ColorblindSettings from '../ColorblindSettings';
import TypingInput from '../TypingInput/PracticeSession';
import CurriculumTodo from '../CurriculumTodo';
import ImageOutTest from '../ImageOutTest';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <>
     <AuthProvider>
      <Stack.Navigator
        initialRouteName="WebCamFeed"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeToSeal} />

<<<<<<< HEAD
      <Stack.Navigator initialRouteName="WebCamFeed" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeToSeal}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Personal" component={PersonalPage}  />
        <Stack.Screen name="AccountSignUp" component={AccountSignUp}  />
        <Stack.Screen name="CurriculumText" component={CurriculumText}  />
=======
        <Stack.Screen
          name="ColorblindSettings"
          component={ColorblindSettings}
        />
          <Stack.Screen
          name="Curriculum Todo"
          component={CurriculumTodo}
        />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Personal" component={PersonalPage} />
        <Stack.Screen name="AccountSignUp" component={AccountSignUp} />
>>>>>>> origin/pre-alpha
        {/* the "Main "screen below renders the bottom Nav which wraps the relevant pages it is included on */}
        <Stack.Screen name="Main" component={BottomNav} />
        {/* commented duplicate screen */}
        {/* <Stack.Screen
          name="ColorblindSettings"
          component={ColorblindSettings}
        /> */}
        <Stack.Screen name="HowSealWorks" component={HowSealWorks} />
        <Stack.Screen name="TypingInput" component={TypingInput} />
        {/* Commented for testing, uncomment to enable break screen*/}
        <Stack.Screen name="Break" component={Break} />
        <Stack.Screen name='Video' component={Video}/>
        {/* Commented for testing, to enable camera feed uncomment this */}
        {/* <Stack.Screen name="WebCamFeed" component={WebCamFeed}  /> */}
        <Stack.Screen name="ImageOutTest" component={ImageOutTest} />
      </Stack.Navigator>
      <ColorblindFilter />
      </AuthProvider>
    </>
  );
};

export default Index;

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import WelcomeToSeal from '../WelcomeToSeal';
// import Login from '../Login';
// import PersonalPage from '../PersonalPage';
// import AccountSignUp from '../AccountSignUp';
// import HowSealWorks from '../HowSEALWorks';
// import Achievements from '../Achievements';

// // Account signup is currently being used as a placeholder for the profile page
// // This is present in the StackNavigators file which has been created to handle the navigation
// // between the different pages (Home and Profile)

// const Stack = createNativeStackNavigator();

// const Index = ({navigate}) => {
//   return (

//       <Stack.Navigator initialRouteName={WelcomeToSeal} screenOptions={{
//         headerShown: false
//       }}>
//         <Stack.Screen name="Welcome" component={WelcomeToSeal}  />
//         <Stack.Screen name="Login" component={Login}  />
//         <Stack.Screen name="Personal" component={PersonalPage}  />
//         <Stack.Screen name="AccountSignUp" component={AccountSignUp}  />
//         {/* the "Main "screen below renders the bottom Nav which wraps the relevant pages it is included on */}
//         <Stack.Screen name="Main" component={BottomNav}  />
//         <Stack.Screen name="HowSealWorks" component={HowSealWorks}  />
//         <Stack.Screen name="Achievements" component={Achievements}  />

//       </Stack.Navigator>

//   );
// };

// export default Index;
