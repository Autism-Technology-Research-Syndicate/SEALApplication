import React from 'react';
import {Text, Pressable} from 'react-native';
import {getStyles} from './defaultCSS';
import {useFontContext} from '../../Contexts/FontContext';

type props = {
  light: boolean;
};

function Index(props) {
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const styles = getStyles(selectedFontFamily);

  const {onPress, title = 'Heeelo', isActive = true, light} = props;
  const combinestyles = [
    styles.button,
    styles.opacityLight,
    light ? styles.light : styles.dark,
  ];
  return (
    <Pressable style={combinestyles} onPress={onPress}>
      <Text style={[styles.text, styles.opacityNormal]}>{title}</Text>
    </Pressable>
  );
}

export default Index;
