import React from 'react';
import {Text} from 'react-native-paper';
import {getStyles} from './defaultCSS';
import {useSettingsContext} from '../../Contexts/SettingsContext';

function Index(props) {
  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  return <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;
}

export default Index;
