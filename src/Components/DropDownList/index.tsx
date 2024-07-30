import React, {Component, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './defaultCSS';

const labels = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
];

export const createDropDownList = (
  labels: object[],
  value: string[],
  setValue: Function,
) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(labels);

  return (
    <DropDownPicker
      placeholder="Select All That Apply"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={true}
      min={0}
      max={5}
      showTickIcon={true}
      dropDownContainerStyle={styles.dropDown}
      dropDownDirection="AUTO"
    />
  );
};

