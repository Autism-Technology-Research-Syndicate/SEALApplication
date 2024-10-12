import React, { useMemo } from "react";
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import Text from '../Text';
import styles from './defaultCSS';

const DropdownBasic = ({ contextType, value }) => {
  // Define regular expressions for each condition
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  const context = {
    "password": (text) => {
      const minLength = 10;

      // Check each condition
      const hasUppercase = uppercaseRegex.test(text);
      const hasLowercase = lowercaseRegex.test(text);
      const hasNumber = numberRegex.test(text);
      const hasSpecialChar = specialCharRegex.test(text);
      const isLengthValid = text.length >= minLength;

      // Return an array of conditions and their validity
      return [
        { label: `Must be 10-32 characters long`, valid: isLengthValid }
      ];
    },
    "username": (text) => {
      const minLength = 8;

      // Check each condition
      const hasNumber = numberRegex.test(text);
      const hasSpecialChar = specialCharRegex.test(text);
      const isLengthValid = text.length >= minLength;

      // Return an array of conditions and their validity
      return [
        { label: "Must be 8-32 characters long", valid: isLengthValid }
      ];
    }
  }

  // Function to render an individual condition item in the dropdown
  const renderConditionItem = (condition) => {

    return (
      <View style={styles.item} key={condition?.label}>
        {!condition?.valid && !condition?.valid ? (
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


    console.log(value);

    if (!value) return;

    const conditions = context[contextType](value);

    // If all conditions are satisfied, do not render the dropdown
    if (conditions.every((condition) => condition.valid))
      return;

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

export default DropdownBasic;