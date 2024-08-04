import React from 'react';
import { Text } from 'react-native';
import styles from './defaultCSS';
import { Button } from 'react-native-paper';


type props = {
  light: boolean;
};


function Index(props) {
  const { onPress, title = 'Heeelo', isActive = true, light, icon = "", loading = false, dark= !light } = props;
  const combinestyles = [styles.button, (light ? styles.light : styles.dark)];

  return (
   <Button icon={icon} compact={true} dark mode="contained-tonal"  onPress={onPress} labelStyle={styles.icon} contentStyle={[styles.dimensions, ...combinestyles]}>
      <Text style={[styles.text, styles.opacityNormal]}>{title}</Text>
   </Button>
  );
};

export default Index;
