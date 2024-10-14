import React, { memo } from "react";
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import Text from '../Text';
import styles from './defaultCSS';

const DropdownAdvance = ({ contextType, value, rules, errors }) => {
  // Define regular expressions for each condition
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const emailValid = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;
  const minLength = rules?.minLength;
  const maxLength = rules?.maxLength;

  const context = {
    "password": (text) => {

      // Check each condition
      const hasUppercase = uppercaseRegex.test(text);
      const hasLowercase = lowercaseRegex.test(text);
      const hasNumber = numberRegex.test(text);
      const hasSpecialChar = specialCharRegex.test(text);
      const isLengthValid = text.length >= minLength;

      // Return an array of conditions and their validity
      return [
        { label: `Must be 10-32 characters long`, valid: isLengthValid },
        { label: "Must contain numerical characters", valid: hasNumber },
        { label: "Must contain lowercase characters", valid: hasLowercase },
        { label: "Must contain uppercase characters", valid: hasUppercase },
        { label: "Can contain special characters (&, %, etc.)", valid: hasSpecialChar },

      ];
    },
    "username": (text) => {

      // Check each condition
      const hasNumber = numberRegex.test(text);
      const hasSpecialChar = specialCharRegex.test(text);
      const isLengthValid = text.length >= minLength;

      // Return an array of conditions and their validity
      return [
        { label: "Must be 8-32 characters long", valid: isLengthValid },
        { label: "Must not contain a number", valid: !hasNumber },
        { label: "Must not contain special characters (&, %, etc.)", valid: !hasSpecialChar },
      ];
    },
    "email": (text) => {

      // Check each condition
      const isEmail = emailValid.test(text);

      // Return an array of conditions and their validity
      return [
        { label: "Valid email", valid: isEmail }
      ];
    },
    "age": (text) => {

      const age = parseInt(text);
      // Check each condition
      const isAgeRange = age >= 3 && age <= 100;

      // Return an array of conditions and their validity
      return [
        { label: "Age must be between 3 and 100", valid: isAgeRange }
      ];
    },
    "morethanOne": (text) => {

      const morethanOne = Array.isArray(text) && text.length > 0;
      // Check each condition

      // Return an array of conditions and their validity
      return [
        { label: "Please select 1 or more item", valid: morethanOne }
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