import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import styles from './defaultCSS';
import { parseStrToCurriculumData } from '../../../Database/dbUtilities';
import { printCurriculumFirstRow, getAllCurriculumData } from '../../../Database/dbInitialization';
import { NavigationProp } from '@react-navigation/native';
import CustomButton from '../../Components/TeacherButton';

const CurriculumInput = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [description, setDescription] = useState('');

    // Function to handle saving the curriculum data with detailed logging
    const handleSave = async () => {
        try {
            console.log('handleSave called with inputStr:', description);
            console.log('About to parse and insert data using parseStrToCurriculumData');
    
            // Use parseStrToCurriculumData to parse and insert data into the curriculum table
            await parseStrToCurriculumData(description);
    
            console.log('Data parsing and insertion completed');
    
            // Fetch and display the first row of the curriculum table to verify the insertion
            console.log('Fetching the first row of the curriculum table');
            const firstRow = await printCurriculumFirstRow();
    
            if (firstRow) {
                Alert.alert(
                    'Success',
                    `Curriculum data saved successfully.\n\nFirst row in the table:\nType: ${firstRow.input_output}\nSequence: ${firstRow.sequence}\nContent: ${firstRow.content}`
                );
            } else {
                Alert.alert('Success', 'Curriculum data saved successfully, but no rows found in the table.');
            }
            
            console.log('Fetching all rows from the curriculum table');
            const allRows = await getAllCurriculumData();
            console.log('All curriculum rows:', allRows);

            console.log('Alert displayed successfully');
    
            // Clear the input field and navigate back
            setDescription('');
            // navigation.goBack();
        } catch (error) {
            console.error('Error in handleSave:', error);
            Alert.alert('Error', `Failed to save curriculum data: ${(error as Error).message}`);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Input Curriculum</Text>

            <TextInput 
                style={styles.input}
                placeholder="Enter curriculum data string"
                value={description}
                onChangeText={setDescription}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}> 
                    <CustomButton title="Save" onPress={handleSave}/>
                </View>
                <View style={styles.buttonSpacing}> 
                    <CustomButton title="Cancel" onPress={() => navigation.goBack()}/>
                </View>
            </View>
        </View>
    );
};

export default CurriculumInput;