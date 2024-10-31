import React, {useState, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import Button from '../../Components/Button';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import {
  printCurriculumFirstRow,
  insertAnswerData,
} from '../../../Database/dbInitialization';
import styles from './defaultCSS';

const TypingInput = () => {
  const [curriculum, setCurriculum] = useState([]);

  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    //insert answers into answer table. default values used for user_id
    insertAnswerData((user_id = 0), curriculum, answer);
    //reset field after submission
    setAnswer('');
  };

  //pull curriculum data into screen
  useEffect(() => {
    printCurriculumFirstRow()
      .then(result => setCurriculum(result.content))
      .catch(err => console.log(err));
  }, []);

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.curriculum}>{curriculum}</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your Answer Here"
          value={answer}
          onChangeText={setAnswer}
        />
        <Button dark title="Submit" onPress={handleSubmit} />
      </View>
    </BackgroundWrapper>
  );
};

export default TypingInput;
