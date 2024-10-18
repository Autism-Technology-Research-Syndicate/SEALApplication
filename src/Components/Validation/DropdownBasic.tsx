import React, { useMemo } from "react";
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import Text from '../Text';
import styles from './defaultCSS';

const DropdownBasic = ({ contextType, value, rules }) => {
  // Define regular expressions for each condition
  const minLength = rules?.minLength;
  const maxLength = rules?.maxLength;

  const isLengthValid = (text) =>  text.length >= minLength && text.length <= maxLength;

  const context = {
    "password": (text) => {
      // Check each condition
      const isLengthValid = (text) =>  text.length >= minLength && text.length <= maxLength;

      // Return an array of conditions and their validity
      return [
        { label: `Must be ${minLength}-${maxLength} characters long`, valid: isLengthValid(text) }
      ];
    },
    "username": (text) => {

      // Return an array of conditions and their validity
      return [
        { label: `Must be ${minLength}-${maxLength} characters long`, valid: isLengthValid(text) }
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

    // If all conditions are satisfied, do not render the dropdown
    //if (conditions.every((condition) => condition.valid))
     // return;

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