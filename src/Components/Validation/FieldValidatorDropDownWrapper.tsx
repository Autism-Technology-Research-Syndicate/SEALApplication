import React from 'react';
import { Controller } from "react-hook-form"
import DropdownBasic from './DropdownBasic';
import DropdownAdvance from './DropdownAdvance';


 export const FieldValidatorDropDownWrapper = ({ children, control, name, value, rules, contextType, errors, advance=false }) => (
    <>
      <Controller
        control={control}
        rules={rules}
        render={
          children
        }
        name={`${name}`}
      />
      {!advance ?
      <DropdownBasic contextType={contextType} value={value} rules={rules}/>
      :
      <DropdownAdvance contextType={contextType} value={value} rules={rules} />
      }
    </>
    );
