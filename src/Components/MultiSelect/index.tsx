import React, { useState } from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

import styles from './defaultCSS';

function Index(props) {

  return (
    <MultipleSelectList
      setSelected={props.setSelected}
      onSelect={props.onChangeText}
      data={props.options}
      search={props.search}
      save="key"
      label={props.placeholder}
      fontFamily={styles.fontStyle}
      boxStyles={styles.container}
      dropdownStyles={styles.container}
      dropdownTextStyles={styles.container}
      inputStyles={styles.container}
    />

  );
};

export default Index;
