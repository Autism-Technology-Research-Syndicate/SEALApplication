import React, { memo } from "react";
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import Text from '../Text';
import styles from './defaultCSS';

const DropdownAdvance = ({ contextType, value, rules }) => {
  // Define regular expressions for each condition
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const emailValid = rules?.pattern;
  const minLength = rules?.minLength;
  const maxLength = rules?.maxLength;
  const min = rules?.min;
  const max = rules?.max;

  const hasUppercase = (text) => uppercaseRegex.test(text);
  const hasLowercase = (text) =>  lowercaseRegex.test(text);
  const hasNumber = (text) =>  numberRegex.test(text);
  const hasSpecialChar = (text) =>  specialCharRegex.test(text);
  const isLengthValid = (text) =>  text.length >= minLength && text.length <= maxLength;
  const isEmail = (text) => emailValid.test(text);
  const morethanOne = (text) =>  Array.isArray(text) && text.length > 0;

  const context = {
    "password": (text) => {

      // Return an array of conditions and their validity
      return [
        { label: `Must be ${minLength}-${maxLength} characters long`, valid: isLengthValid(text) },
        { label: "Must contain numerical characters", valid: hasNumber(text)  },
        { label: "Must contain lowercase characters", valid: hasLowercase(text)  },
        { label: "Must contain uppercase characters", valid: hasUppercase(text)  },
        { label: "Can contain special characters (&, %, etc.)", valid: hasSpecialChar(text)  },

      ];
    },
    "username": (text) => {
      // Return an array of conditions and their validity
      return [
        { label: `Must be ${minLength}-${maxLength} characters long`, valid: isLengthValid(text) },
        { label: "Must not contain a number", valid: !hasNumber(text) },
        { label: "Must not contain special characters (&, %, etc.)", valid: !hasSpecialChar(text) },
      ];
    },
    "email": (text) => {
      // Return an array of conditions and their validity
      return [
        { label: "Valid email", valid: isEmail(text) }
      ];
    },
    "age": (text) => {

      const age = parseInt(text);
      // Check each condition
      const isAgeRange = age > min && age < max;

      // Return an array of conditions and their validity
      return [
        { label: `Age must be ${min}-${max}`, valid: isAgeRange }
      ];
    },
    "morethanOne": (text) => {

      return [
        { label: "Please select 1 or more item", valid: morethanOne(text) }
      ];
    }
  }

  // Function to render an individual condition item in the dropdown
  const renderConditionItem = (condition) => {

    return (
      <View style={styles.item} key={condition?.label}>
        {!condition?.valid ? (
          <><Icon
            source="alpha-x-circle-outline"
            color="red"
            size={25}
          /><Text className="error-message">{condition?.label}</Text></>
        ) : (
          <><Icon
            source="check-circle-outline"
            color="green"
            size={25}
          /><Text>{condition?.label}</Text></>
        )}

      </View>
    );
  };


  // Function to render the entire validation dropdown
  const renderValidationDropdown = () => {
    // Validate the password and get an array of conditions with their validity
    // const conditions = validatePassword();

    if (!value) return;

    const conditions = context[contextType](value);

    // Render the dropdown with each condition item
    return (
      <View
        style={styles.container}
      >
        {conditions.map(renderConditionItem)}
      </View>
    );
  };

  // Render the validation dropdown
  return renderValidationDropdown();
};

export default DropdownAdvance;