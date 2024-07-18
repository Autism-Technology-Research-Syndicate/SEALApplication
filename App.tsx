import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WebCamFeed from './src/Components/WebCamFeed';
import { WelcometoSEAL } from './src/Screens/WelcometoSEAL';

const App: React.FC = () => {
  return (
<>
    <WebCamFeed />
    <View>
      <WelcometoSEAL />
    </View>
    </>
   ) ;
};

export default App;
