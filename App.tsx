/**
 * App.tsx
 *
 * This is the main entry point for the SEAL application.
 * It sets up the overall structure of the app, including navigation, developer mode,
 * and context providers.
 */


import React, { useCallback, useEffect, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/.';
import DeveloperMode from './src/Screens/DeveloperMode';
import { DeveloperModeProvider, useDeveloperMode } from './src/Contexts/DeveloperModeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './appCSS.tsx';

// Create a stack navigator for the root of the app

const RootStack = createNativeStackNavigator();


/**
 * CloseButton Component
 *
 * Renders a button to close the developer mode.
 * This is extracted as a separate component for reusability and cleaner code.
 *
 * @param {Function} onPress - Function to call when the button is pressed
 */
const CloseButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <View style={styles.closeButtonContainer}>
    <TouchableOpacity onPress={onPress} style={styles.closeButton}>
      <Text style={styles.closeButtonText}>Close</Text>
    </TouchableOpacity>
  </View>
);




const AppContent: React.FC = () => {

  // Access developer mode functions and state from context

  const { isDeveloperModeActive, openDeveloperMode, closeDeveloperMode } = useDeveloperMode();


  return (

    <View style={styles.container}>

     {/* Main navigation stack */}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Stack" component={Home} />
        </RootStack.Navigator>

      {/* Developer mode activation area (top-right corner) */}
        <TouchableWithoutFeedback onPress={openDeveloperMode}>
        <View style={styles.activationArea} />
      </TouchableWithoutFeedback>

      {/* Render DeveloperMode component when active */}
        {isDeveloperModeActive && <DeveloperMode/>}
      {/* Render close button for developer mode when active */}
        {isDeveloperModeActive && <CloseButton onPress={closeDeveloperMode} />}
      </View>
  );
};


/**
 * App Component
 *
 * The root component of the application.
 * It sets up providers and containers:
 * - DeveloperModeProvider for managing developer mode state
 * - NavigationContainer for React Navigation
 */


const App: React.FC = () => {
  // Temporatiliy commented out the camera interval code

  // const cameraRef = useRef<CameraComponent>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (cameraRef.current) {
  //       cameraRef.current.takePicture();
  //     }
  //   }, 10 * 1000); // Change 10 to the number of seconds for the interval

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <DeveloperModeProvider>
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  </DeveloperModeProvider>
      );
};




export default App;
