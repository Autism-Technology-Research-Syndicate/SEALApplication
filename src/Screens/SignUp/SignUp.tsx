import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {getStyles} from './defaultCSS';
import {createTextBox} from '../../Components/InputBox/';
import {createDropDown} from '../../Components/DropDownList/';
import {labels, RegData} from '.';
import {
  errorText,
  validateEmail,
  validatePass,
  validateAge,
  validateName,
} from './validation';
import {useSettingsContext} from '../../Contexts/FontContext';

/**
 * SignUp component renders the registration form and handles user input and validation.
 *
 * @returns {React.JSX.Element} The rendered Sign Up Screen
 */
export const SignUp = () => {
  // State hooks for form inputs and validation flags
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState([]);
  const [estimatedAttentionSpan, setAttention] = useState('');
  const [levelOfSpectrum, setLevelOfSpectrum] = useState('');
  const [settingsChoices, setSettings] = useState('');
  const [progessInCurriculum, setProgess] = useState('');
  const [averageAccuracy, setAccuracy] = useState('');
  const [description, setDescription] = useState('');
  const [necessaryBreakTime, setBreakTime] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validAge, setValidAge] = useState(true);

  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  /**
   * Handles the form submission and validates inputs.
   * If all required inputs are valid, the data is sent to the database.
   * If any input is invalid, it updates the corresponding state to
   * show error messages.
   */
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

    // Validates each required field
    let vEmail = validateEmail(email);
    let vPass = validatePass(password);
    let vAge = validateAge(age);
    let vName = validateName(username);

    // If all fields are valid, proceed with submission (currently just logs data)
    if (vEmail && vPass && vAge && vName) {
      console.log(`${data.username}'s profile has been created`);
    } else {
      // Update validation state to show error messages
      setValidEmail(vEmail);
      setValidPass(vPass);
      setValidAge(vAge);
      setValidName(vName);
      console.log('Validation error occurred');
      console.log('Valid results:', vAge, vEmail, vName, vPass);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Account Sign Up</Text>

          {/* Input boxes and their labels */}
          <Text style={styles.label}>Parent/Guardian Email Address</Text>
          {createTextBox(
            'Enter Email Address',
            email,
            setEmail,
            'email',
            validEmail,
          )}
          {!validEmail && (
            <Text style={styles.errorText}>{errorText.email}</Text>
          )}

          <Text style={styles.label}>Learner Username</Text>
          {createTextBox(
            'Create Username',
            username,
            setUsername,
            null,
            validName,
          )}
          {!validName && <Text style={styles.errorText}>{errorText.name}</Text>}

          <Text style={styles.label}>Password</Text>
          {createTextBox(
            'Create a Password',
            password,
            setPassword,
            null,
            validPass,
            true,
          )}
          {!validPass && <Text style={styles.errorText}>{errorText.pass}</Text>}

          <Text style={styles.label}>Learner Age</Text>
          {createTextBox(
            "Enter Learner's Age",
            age,
            setAge,
            'numeric',
            validAge,
          )}
          {!validAge && <Text style={styles.errorText}>{errorText.age}</Text>}

          <Text style={styles.label}>Learner Interests</Text>
          {createDropDown(labels, interests, setInterests)}

          <Text style={styles.label}>Upload a Picture</Text>
          {/* TODO: Add image upload component here */}

          <Text style={styles.label}>Attention Span</Text>
          {createTextBox(
            "Enter Child's Attention Span",
            estimatedAttentionSpan,
            setAttention,
            'numeric',
          )}

          <Text style={styles.label}>Level of Spectrum</Text>
          {createTextBox(
            "Enter Child's Level of Spectrum",
            levelOfSpectrum,
            setLevelOfSpectrum,
            'numeric',
          )}

          <Text style={styles.label}>Setting Choices</Text>
          {createTextBox('Enter Settings', settingsChoices, setSettings)}

          <Text style={styles.label}>Progress in Curriculum</Text>
          {createTextBox(
            "Enter Child's Current Progress in the Curriculum",
            progessInCurriculum,
            setProgess,
            'numeric',
          )}

          <Text style={styles.label}>Average Accuracy</Text>
          {createTextBox(
            "Enter Child's Average Accuracy",
            averageAccuracy,
            setAccuracy,
            'numeric',
          )}

          <Text style={styles.label}>Description</Text>
          {createTextBox(
            'Enter description',
            description,
            setDescription,
            null,
            true,
            false,
            true,
          )}

          <Text style={styles.label}>Necessary Break Time</Text>
          {createTextBox(
            "Enter Child's Necessary Break Time",
            necessaryBreakTime,
            setBreakTime,
            'numeric',
          )}

          <Pressable onPress={() => handleSubmit()} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
