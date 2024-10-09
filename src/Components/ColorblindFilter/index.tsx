import React from 'react';
import {View} from 'react-native';
import {useColorblind} from '../../Contexts/ColorblindContext';
import styles from './defaultCSS';

const ColorblindFilter = () => {
  const {filterType} = useColorblind();

  const getFilterStyle = () => {
    switch (filterType) {
      case 'protanopia':
        return styles.protanopia;
      case 'deuteranopia':
        return styles.deuteranopia;
      case 'tritanopia':
        return styles.tritanopia;
      default:
        return {};
    }
  };

  return <View style={[styles.container, getFilterStyle()]} />;
};

export default ColorblindFilter;
