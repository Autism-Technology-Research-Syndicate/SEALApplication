// import { Image, View, } from 'react-native';
import { TouchableOpacity, Image, ScrollView, View, StyleSheet } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import styles from './defaultCSS';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import { Appbar } from 'react-native-paper';

import React, { useState } from 'react';

// import React from 'react';
// import { ScrollView, View, StyleSheet } from 'react-native';


const Index = ({ navigation }) => {
  const [fontSize, setFontSize] = useState(20); // Initial font size
  const [eyeProtectMode, setEyeProtectMode] = useState(false); // Eye protect mode state
  const longText = `
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
   
    This is a sample text. This is a sample text.
    This is a sample text. This is a sample text.
    This is a sample text. This is a sample text.
    This is a sample text. This is a sample text.
    This is a sample text. This is a sample text.
  `;

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize > 10 ? fontSize - 2 : fontSize);
  const toggleEyeProtectMode = () => setEyeProtectMode(!eyeProtectMode); // Toggle eye protect mode


//<Text style={[styles.text, { fontSize }]}></Text>
  return (
    <BackgroundWrapper colors={{ backgroundColor: eyeProtectMode ? '#333' : '#FFF' }}>
      <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
      <Text style={styles.header}>
        Reading for Today
      </Text>


      <View style={styles.buttonContainer}>
        {/* <Button onPress={increaseFontSize} style={styles.button} title="Increase Font Size" /> */}
        <TouchableOpacity onPress={increaseFontSize} style={styles.button}>
        <Text style={{...styles.buttonText, ...{ fontSize: 25, fontWeight: 'bold'}}}>A</Text>
        </TouchableOpacity>

        {/* <Button onPress={decreaseFontSize} title="Decrease Font Size" /> */}
        <TouchableOpacity onPress={decreaseFontSize} style={styles.button}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={toggleEyeProtectMode} style={styles.button}>
          <Text style={styles.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleEyeProtectMode} style={styles.button}>
          <Text style={styles.buttonText}>Dark</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        {/* <Button title='A' icon="night" onPress={() => navigation.navigate('CurriculumText')} /> */}
      </View>


      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.centerContent}>
          
          <Text style={{...styles.text, ...{fontSize}}}>
            {longText}
          </Text>
        </View>
      </ScrollView>
            {/* Buttons to adjust the font size */}
    </BackgroundWrapper>
  );
};



export default Index;