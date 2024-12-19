import React from 'react';
import styles from './defaultCSS';
import { Button } from 'react-native-paper';

type Props = {
  light?: boolean;
  onPress: () => void;
  title?: string;
  icon?: string;
  loading?: boolean;
};

function Index(props: Props) {
  const { onPress, title = 'BUTTON', light = false, icon = "", loading = false } = props;

  return (
    <Button 
      labelStyle={[styles.text]}
      icon={icon} 
      mode="contained"
      onPress={onPress} 
      contentStyle={styles.dimensions} 
      style={[styles.button]}       
      loading={loading}
    >
      {title}
    </Button>
  );
};

export default Index;
