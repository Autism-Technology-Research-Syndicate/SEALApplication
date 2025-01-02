// import { Image, View, } from 'react-native';
import { TouchableOpacity, Image, ScrollView, View, StyleSheet } from 'react-native';
import MulticolorBackground from '../../Components/MulticolorBackground';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import styles from './defaultCSS';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import { Appbar } from 'react-native-paper';

import React, { useEffect,useState } from 'react';
import { fetchLongText } from './data';


const Index = ({ navigation }) => {
  const [fontSize, setFontSize] = useState(20); // Initial font size
  const [eyeProtectMode, setEyeProtectMode] = useState(false); // Eye protect mode state
  const sampleText = `
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
    This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.
  `;
  const [longText, setLongText] = useState(sampleText); // text content from curriculum table

  useEffect(() => {
    const loadLongText = async () => {
      try {
        const textId = 1; // Replace with the actual text ID
        const text = await fetchLongText(textId);
        const textContent = text[0].content; // The fetched row is wrapped in an array
        setLongText(textContent);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      }
    };

    loadLongText();
  }, []);


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