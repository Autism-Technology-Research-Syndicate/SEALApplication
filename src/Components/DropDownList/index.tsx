import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';

/**
 * Transforms an array of strings into an array of objects with label and value properties.
 * Creates a dropdown picker component with the transformed labels.
 *
 * @param {string[]} labels - Array of label strings.
 * @param {string[]} value - Array of selected values.
 * @param {Function} setValue - Function to update the selected values.
 * @returns {React.JSX.Element} - The rendered dropdown picker component.
 */
export const createDropDown = (
  labels: string[],
  value: string[],
  setValue: any,
) => {
  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);
  // Transform the label strings into objects with label and value properties
  const transformedLabels = labels.map(e => ({
    label: e,
    value: e.toLowerCase(),
  }));

  // State to manage the dropdown open/close status
  const [open, setOpen] = useState(false);

  // State to manage the dropdown items list
  const [items, setItems] = useState(transformedLabels);

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
      mode="BADGE"
      listMode="MODAL"
      min={0} // Minimum number of selections
      max={5} // Maximum number of selections
      showTickIcon={true}
      dropDownDirection="AUTO"
      style={styles.dropDown}
      labelStyle={styles.labels}
    />
  );
};
