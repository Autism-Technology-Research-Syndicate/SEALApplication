import React, {useState} from 'react';
import {MultipleSelectList} from 'react-native-dropdown-select-list';

import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/FontContext';

function Index(props) {
  const {selectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  return (
    <MultipleSelectList
      setSelected={props.setSelected}
      onSelect={props.onChangeText}
      data={props.options}
      search={props.search}
      save="key"
      label={props.displayName}
      fontFamily={styles.fontStyle}
      boxStyles={styles.container}
      dropdownStyles={styles.container}
      dropdownTextStyles={styles.container}
      inputStyles={styles.container}
    />
  );
}

export default Index;
