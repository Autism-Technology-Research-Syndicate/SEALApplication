import React from 'react';
import {Button} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';

type props = {
  light: boolean;
};

function Index(props) {
  const {selectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);
  const {
    onPress,
    title = 'Heeelo',
    isActive = true,
    light,
    icon = '',
    loading = false,
    dark = !light,
    disabled = false,
  } = props;
  const combinestyles = [styles.button, light ? styles.light : styles.dark];

  return (
    <Button
      {...props}
      labelStyle={[
        styles.icon,
        styles.text,
        disabled ? styles.disabled : styles.opacityNormal,
      ]}
      icon={icon}
      compact={true}
      dark
      // mode="contained-tonal"
      onPress={onPress}
      style={[styles.dimensions, ...combinestyles]}>
      {title}
    </Button>
  );
}

export default Index;
