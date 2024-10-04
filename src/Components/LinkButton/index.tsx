import React from 'react';
import {Text} from 'react-native';
import {getStyles} from './defaultCSS';
import {Button} from 'react-native-paper';
import {useFontContext} from '../../Contexts/FontContext';

function Index(props) {
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const styles = getStyles(selectedFontFamily);

  const {onPress, title = 'Heeelo'} = props;

  return (
    <Button
      labelStyle={[styles.text, props.style]}
      mode="text"
      {...props}
      onPress={onPress}>
      {title}
    </Button>
  );
}

export default Index;
