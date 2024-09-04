import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import styles from './defaultCSS';
import { parseStrToCurriculumData } from '../../../Database/dbUtilities';

import { NavigationProp } from '@react-navigation/native';

const CurriculumInput = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [description, setDescription] = useState('');

    const handleSave = () => {
        try {
            parseStrToCurriculumData(description);
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to save the curriculum data.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Input Curriculum</Text>

            <TextInput 
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />

            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => navigation.goBack()} />

        </View>
    );
};

export default CurriculumInput;