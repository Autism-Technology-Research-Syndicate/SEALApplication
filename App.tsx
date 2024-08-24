import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Home from './src/Screens/Home/.';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './src/Features/BottomNavigation/.';

const App: React.FC = () => {
  const cameraRef = useRef<CameraComponent>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cameraRef.current) {
        cameraRef.current.takePicture();
      }
    }, 10 * 1000); // Change 10 to the number of seconds for the interval

    return () => clearInterval(interval);
  }, []);

  return (
// renders Home which in turn wraps the BottomNav. This means that screens after login will be wrapped in the BottomNav
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default App;
