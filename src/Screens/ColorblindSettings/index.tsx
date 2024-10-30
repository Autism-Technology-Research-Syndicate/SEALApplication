import React from 'react';
import {View, Button, Text} from 'react-native';
import {useColorblind} from '../../Contexts/ColorblindContext';
import styles from './defaultCSS';
import {NavigationProp} from '@react-navigation/native';

const ColorblindSettings = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const {setFilterType} = useColorblind();

  const applyFilter = type => {
    setFilterType(type);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Colorblindness Filter:</Text>
      <Button title="Protanopia" onPress={() => applyFilter('protanopia')} />
      <Button
        title="Deuteranopia"
        onPress={() => applyFilter('deuteranopia')}
      />
      <Button title="Tritanopia" onPress={() => applyFilter('tritanopia')} />
      <Button title="None" onPress={() => applyFilter('none')} />
    </View>
  );
};

export default ColorblindSettings;
