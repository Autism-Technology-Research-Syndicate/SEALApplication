import { View } from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import LinkButton from '../../Components/LinkButton/.';
import TextField from '../../Components/TextField/.';
import Text from '../../Components/Text/.';
import { useAuth } from '../../Components/Authentication/AuthProvider';
import { getStyles } from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';
import { FieldValidatorDropDownWrapper } from '../../Components/Validation/FieldValidatorDropDownWrapper';

const Index = ({ navigation }) => {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);
  const { authToken, handleLogin, handleLogout } = useAuth();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all',
    defaultValues: {
      username: "",
      password: "",
    },
  })

  // has the handle login been set up correctly?
  const onSubmit = data =>{
    navigation.navigate('Personal');
    handleLogin();
  }

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.upper_body}>
            <FieldValidatorDropDownWrapper control={control} name="username" value={getValues("username")} contextType="username" rules={{ required: true, minLength: 8, maxLength: 32 }} errors={errors}>
              {({ field: { onChange, onBlur, value } }) => (
                <TextField
                  placeholder="Please enter username"
                  label="username"
                  onBlur={onBlur}
                  onChangeText={(value) => { onChange(value) }}
                  value={value}
                />)}
            </FieldValidatorDropDownWrapper>

            <FieldValidatorDropDownWrapper control={control} name="password" value={getValues("password")} contextType="password" rules={ { required: true, minLength: 8, maxLength: 32, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ }} errors={errors}>
              {({ field: { onChange, onBlur, value } }) => (
                <TextField
                  placeholder="Please enter password"
                  label="password"
                  onBlur={onBlur}
                  onChangeText={value => { onChange(value) }}
                  value={value}
                  validationType="password" />
              )}
            </FieldValidatorDropDownWrapper>

            <LinkButton title='Forgot password?' style={{ flexDirection: 'row-reverse' }} onPress={() => navigation.navigate('Welcome')} />
          </View>
          <View style={styles.bottom_body}>
            <Button disabled={!isValid} title='Submit' onPress={ () => navigation.navigate('Main', {screen: 'Home', params: {screen: 'Personal'}}) } />
            <View style={styles.middle_body}>
              <Text style={{ textAlign: 'center' }}>
                Dont' have an account?
              </Text>
              <LinkButton title='Sign up' style={{ textAlign: 'center' }} onPress={() => navigation.navigate('AccountSignUp')} />
            </View>
          </View>
        </View>
        <View>

          <Button light title='How SEAL works...' onPress={() => navigation.navigate('HowSealWorks')} />

        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
