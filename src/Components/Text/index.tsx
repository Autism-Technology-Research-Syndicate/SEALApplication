import React from 'react';
import {Text} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import {useFontContext} from '../../Contexts/FontContext';

function Index(props) {
  const {selectedFontConfig, setSelectedFontConfig} = useFontContext();
  const styles = getStyles(selectedFontConfig);

  return (
    <Text variant="bodyLarge" style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  );
}

export default Index;
