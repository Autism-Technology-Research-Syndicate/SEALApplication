import React from 'react';
import { Controller } from "react-hook-form"
import Dropdown from './DropdownBasic';


 export const FieldValidatorDropDownWrapper = ({ children, control, name, value, rules, errors }) => (
    <>
      <Controller
        control={control}
        rules={rules}
        render={
          children
        }
        name={`${name}`}
      />
      <Dropdown contextType={`${name}`} value={value} />
    </>
    );
