import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../Components/Button';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import TextField from '../../Components/TextField';
import styles from './defaultCSS';

const TypingInput = ({navigation}) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <TextField
          name={'TypingInput'}
          placeHolder={'Type your Answer Here'}
          label={'Your Answer'}
        />
        <Button
          dark
          title="Submit"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
    </BackgroundWrapper>
  );
};

export default TypingInput;
