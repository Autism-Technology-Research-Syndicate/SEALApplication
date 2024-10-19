import { View } from 'react-native';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import BackgroundWrapper from '../../Components/BackgroundWrapper/.';
import Button from '../../Components/Button/.';
import TextField from '../../Components/TextField/.';
import {accountSignUp} from './data';
import Text from '../../Components/Text/.';
import MultiSelect from '../../Components/MultiSelect/.';
import { FieldValidatorDropDownWrapper } from '../../Components/Validation/FieldValidatorDropDownWrapper';
import { useFontContext } from '../../Contexts/FontContext';
import { getStyles } from './defaultCSS';



const Index = ({ navigation }) => {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);
  const [selectedItems, setSelectedItems] = useState([]);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all',
    defaultValues: {
    },
  });


  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <Text style={styles.header}>Account Sign up</Text>

        <View style={styles.body}>
          {accountSignUp.map((item, idx) => {
            return (

              <FieldValidatorDropDownWrapper  key={idx} control={control} contextType={item.validationType} name={item.id} value={getValues(item.id)} advance={true} rules={item.rules} errors={errors}>
                {({ field: { onChange, onBlur, value } }) => (


                  item.type !== 'mutliselect' ?
                    <TextField key={idx} name={item.id}
                      placeholder={item.placeHolder}
                      label={item.displayName}
                      validationType={item.validationType}
                      type={item.type}
                      maxLength={item.validationType === 'age' ? 2 : item.rules.maxLength}
                      onBlur={onBlur}
                      onChangeText={(value) => { onChange(value) }}
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
                    onChangeText={(value) => {onChange(selectedItems)}}
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
