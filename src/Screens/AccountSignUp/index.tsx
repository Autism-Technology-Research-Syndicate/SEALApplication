import { View } from 'react-native';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import TextField from '../../Components/TextField/.';
import styles from './defaultCSS';
import { accountSignUp } from './data';
import Text from '../../Components/Text/.';
import MultiSelect from '../../Components/MultiSelect/.';
import { FieldValidatorDropDownWrapper } from '../../Components/Validation/FieldValidatorDropDownWrapper';


const Index = ({ navigation }) => {
  const [form, setForm] = useState({});

  const setValues = (value) => {
    setForm({ ...form, ...value });
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all',
    defaultValues: {
    },
  });


  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>
          Account Sign up
        </Text>

        <View style={styles.body}>
          {accountSignUp.map((item, idx) => {
            return (

              <FieldValidatorDropDownWrapper  key={idx} control={control} contextType={item.validationType} name={item.id} value={form[item.id]} advance={true} rules={item.rules} errors={errors}>
                {({ field: { onChange, onBlur, value } }) => (


                  item.type !== 'mutliselect' ?
                    <TextField key={idx} name={item.id}
                      placeholder={item.placeHolder}
                      label={item.displayName}
                      validationType={item.validationType}
                      type={item.type}
                      maxLength={item.validationType === 'age' ? 2 : item.rules.maxLength}
                      onBlur={onBlur}
                      onChangeText={(value) => { onChange(value); setValues({ [item.id]: value }) }}
                      value={value} />
                    :
                    <MultiSelect 
                    name={item.id}
                    placeholder={item.placeHolder}
                    label={item.displayName}
                    validationType={item.validationType}
                    options={item.items}
                    type={item.type}
                    onBlur={onBlur}
                    search={false}
                    onChangeText={(value) => {onChange(selectedItems); setValues({ [item.id]: selectedItems})}}
                    setSelected={setSelectedItems}
                    value={value} />

                )}
              </FieldValidatorDropDownWrapper>
            )
          })}
        </View>
        <View style={styles.bottom_section}>
          <Button disabled={!isValid} dark title='Sign up' onPress={() => navigation.navigate('Login')} />
          <Button light title='Cancel' onPress={() => navigation.navigate('Welcome')} />
        </View>

      </View>

    </BackgroundWrapper>
  );
};

export default Index;


