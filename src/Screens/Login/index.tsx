import {View } from 'react-native';
import React, { useState} from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import LinkButton from '../../Components/LinkButton/.';
import TextField from '../../Components/TextField/.';
import Text from '../../Components/Text/.';
import styles from './defaultCSS';
import Dropdown from '../../Components/Validation/Dropdown';

const Index = ({ navigation }) => {

  const [login, setLogin] = useState({username: '', password: ''});

  function setLoginValues(value){
    setLogin({...login, ...value});
    console.log("login ", value, login);
  }

  return (
    <BackgroundWrapper>
      <View style={styles.container}>

        <View style={styles.body}>
          <View style={styles.upper_body}>
            <TextField placeholder="Please enter username" value={login.username} onChangeText={value => setLoginValues({username: value})} label="username" />
            <Dropdown contextType="username" value={login.username} />
            <TextField placeholder="Please enter password" label="password" onChangeText={value => setLoginValues({password: value})} validationType="password"  />
            <Dropdown contextType="password" value={login.password} />
            <LinkButton title='Forgot password?' style={{flexDirection: 'row-reverse' }} onPress={() => navigation.navigate('Welcome')} />
          </View>
          <View style={styles.bottom_body}>
          <Button title='Submit' onPress={() => navigation.navigate('Personal')} />

          <View style={styles.middle_body}>
          <Text style={{ textAlign: 'center' }}>
            Dont' have an account?
          </Text>
          <LinkButton title='Sign up' style={{ textAlign: 'center' }} onPress={() => navigation.navigate('AccountSignUp')} />
          </View>
          </View>
        </View>
        <View>

          <Button light title='How SEAL works...'  onPress={() => navigation.navigate('HowSealWorks')} />

        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;


