import React from 'react';
import {Text} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import {useFontContext} from '../../Contexts/FontContext';

function Index(props) {
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const styles = getStyles(selectedFontFamily);

  return (
    <Text variant="bodyLarge" style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  );
}

export default Index;
