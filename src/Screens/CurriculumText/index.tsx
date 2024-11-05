// import { Image, View, } from 'react-native';
import { TouchableOpacity, Image, ScrollView, View, StyleSheet } from 'react-native';
import MulticolorBackground from '../../Components/MulticolorBackground';
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
  `;

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize > 10 ? fontSize - 2 : fontSize);
  const changeMode = () => setEyeProtectMode(!eyeProtectMode); // Toggle eye protect mode



//<Text style={[styles.text, { fontSize }]}></Text>
  return (
    <MulticolorBackground dark = {eyeProtectMode}>
      <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
      <Text style={{...styles.header, }}>
      {/* <Text style={{...styles.header, ...{color:eyeProtectMode?'#FFFFFF':'#305070'}}}> */}
        Reading for Today
      </Text>


      <View style={styles.buttonContainer}>
      <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={increaseFontSize} style={styles.button}>
            <Text style={{ ...styles.buttonText, fontSize: 25, fontWeight: 'bold' }}>A</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={decreaseFontSize} style={styles.button}>
            <Text style={styles.buttonText}>A</Text>
          </TouchableOpacity>
        </View>

        <Button title='🌛' onPress={changeMode} />

      </View>


      {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        <View style={styles.centerContent}>
          
          <Text style={{...styles.text, ...{fontSize},...{padding: 20}}}>
            {longText}
          </Text>
        </View>
        <Button title='Done' onPress={() => navigation.navigate('Main')} />
      {/* </ScrollView> */}

    </MulticolorBackground>
  );
};



export default Index;