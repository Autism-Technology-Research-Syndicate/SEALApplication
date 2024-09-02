import React from 'react';
import { View, Text, Button } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import styles from './defaultCSS';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Time for a Break!</Text>
        <Button
          title="Continue Working"
          onPress={() => navigation.navigate('Welcome')} // Navigate to 'Welcome' screen
          color="#4CAF50"
        />
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
