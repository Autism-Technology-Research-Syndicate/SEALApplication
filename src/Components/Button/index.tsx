import React from 'react';
import styles from './defaultCSS';
import { Button } from 'react-native-paper';


type props = {
  light: boolean;
};


function Index(props) {
  const { onPress, title = 'Heeelo', isActive = true, light, icon = "", loading = false, dark= !light } = props;
  const combinestyles = [styles.button, (light ? styles.light : styles.dark)];

  return (
   <Button labelStyle={[styles.icon, styles.text, styles.opacityNormal]} icon={icon} compact={true} dark mode="contained-tonal"  onPress={onPress} contentStyle={[styles.dimensions, ...combinestyles]}>
      {title}
   </Button>
  );
};

export default Index;
