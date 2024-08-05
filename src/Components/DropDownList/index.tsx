import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './defaultCSS';

export const transformLabels = (labels: string[]) => {
  return labels.map(e => ({label: e, value: e.toLowerCase()}));
};

export const createDropDown = (
  labels: object[],
  value: string[],
  setValue: any,
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
      mode='BADGE'
      listMode='MODAL'
      min={0}
      max={5}
      showTickIcon={true}
      dropDownDirection="AUTO"
      style={styles.dropDown}
    />
  );
};
