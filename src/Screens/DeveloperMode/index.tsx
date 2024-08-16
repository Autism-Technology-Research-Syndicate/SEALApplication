/**
 * DeveloperMode.tsx
 * 
 * This component renders the Developer Mode interface, providing
 * various options for developers to access and test different
 * functionalities of the application.
 */

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './defaultCSS';

/**
 * DeveloperMode Component
 * 
 * Displays a list of developer options as touchable buttons.
 * Each option, when pressed, triggers a specific action or navigation.
 */



const DeveloperMode = () => {
    // Hook to access navigation object
  const navigation = useNavigation();

  //Temporary options for developer mode
  const options = [
    { title: 'Camera', icon: '📷', onPress: () => console.log('Camera component opens') },
    { title: 'Logs', icon: '📝', onPress: () => console.log('Logs viewed') },
    { title: 'Network', icon: '🌐', onPress: () => console.log('Network info viewed') },
    { title: 'Storage', icon: '💾', onPress: () => console.log('Storage info viewed') },
    { title: 'Debug', icon: '🐞', onPress: () => console.log('Debug mode toggled') },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Developer Mode</Text>
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={option.onPress}>
            <Text style={styles.optionIcon}>{option.icon}</Text>
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </View>
  );
};

export default DeveloperMode;
