import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './CSS';
import {createTextBox} from '../../Components/InputBox/';
import {createDropDown} from '../../Components/DropDownList/';
import {labels, RegData, validateEmail, validatePass} from '.';

export function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState([]);
  const [estimatedAttentionSpan, setAttention] = useState('');
  const [levelOfSpectrum, setLevelOfSpectrum] = useState('');
  const [settingsChoices, setSettingsChoices] = useState('');
  const [progessInCurriculum, setProgess] = useState('');
  const [averageAccuracy, setAccuracy] = useState('');
  const [description, setDescription] = useState('');
  const [necessaryBreakTime, setBreakTime] = useState('');

  const[invalidEmail, setInvalidEmail] = useState(false)
  const[invalidPass, setInvalidPass] = useState(false)

  const handleSubmit = async () => {
    let data: RegData = {
      email: email,
      username: username,
      password: password,
      age: Number(age),
      interests: interests,
      estimatedAttentionSpan: Number(estimatedAttentionSpan),
      levelOfSpectrum: Number(levelOfSpectrum),
      settingsChoices: settingsChoices,
      progessInCurriculum: Number(progessInCurriculum),
      averageAccuracy: Number(averageAccuracy),
      description: description,
      necessaryBreakTime: Number(necessaryBreakTime),
    };

    setInvalidEmail(!validateEmail(email))
    setInvalidPass(!validatePass(password))
    if (invalidEmail || invalidPass) {

    }
    else {
      if (username.length && age.length > 0) {
        //TODO code that adds it to db
        console.log(`${data.username}'s profile has been created`);
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Account Sign Up</Text>

          <Text style={styles.label}>Parent/Guardian Email Address</Text>
          {createTextBox(
            'Enter Email Address',
            email,
            setEmail,
            'email-address',
            invalidEmail,
          )}
          <Text style={styles.label}>Learner Username</Text>
          {createTextBox('Create Username', username, setUsername)}

          <Text style={styles.label}>Password</Text>
          {createTextBox(
            'Create Password',
            password,
            setPassword,
            null,
            invalidPass,
            true,
          )}

          <Text style={styles.label}>Learner Age</Text>
          {createTextBox("Enter Learner's Age", age, setAge, 'number-pad')}

          <Text style={styles.label}>Learner Interests</Text>
          {createDropDown(labels, interests, setInterests)}

          <Text style={styles.label}>Upload a Picture</Text>

          <Text style={styles.label}>Attention Span</Text>
          {createTextBox(
            "Enter Child's Attention Span",
            estimatedAttentionSpan,
            setAttention,
            'number-pad',
          )}

          <Text style={styles.label}>Level of Spectrum</Text>
          {createTextBox(
            "Enter Child's Level of Spectrum",
            levelOfSpectrum,
            setLevelOfSpectrum,
            'number-pad',
          )}

          <Text style={styles.label}>setting choices</Text>
          {createTextBox('Enter Settings', settingsChoices, setSettingsChoices)}

          <Text style={styles.label}>Progress in Curriculum</Text>
          {createTextBox(
            "Enter Child's Current Progress in the Curriculum",
            progessInCurriculum,
            setProgess,
            'number-pad',
          )}

          <Text style={styles.label}>Average Accuracy</Text>
          {createTextBox(
            "Enter Child's Average Accuracy",
            averageAccuracy,
            setAccuracy,
            'number-pad',
          )}

          <Text style={styles.label}>Description</Text>
          {createTextBox(
            'Enter description',
            description,
            setDescription,
            null,
            false,
            false,
            true,
          )}

          <Text style={styles.label}>Necessary Break Time</Text>
          {createTextBox(
            "Enter Child's Necessary Break Time",
            necessaryBreakTime,
            setBreakTime,
            'number-pad',
          )}

          <View style={styles.button}>
            <Button onPress={() => handleSubmit()} title="Sign Up" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
