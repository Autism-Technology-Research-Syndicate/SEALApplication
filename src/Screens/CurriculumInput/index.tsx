import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './defaultCSS';
import { parseStrToCurriculumData } from '../../../Database/dbUtilities';

const CurriculumInput = ({ navigation }) => {
    const [description, setDescription] = useState('');

    const handleSave = () => {
        parseStrToCurriculumData(description);
        navigation.goBack();
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