import {View, Text, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStyles} from './defaultCSS';
import {Icon, Button} from 'react-native-paper';
import {useFontContext} from '../../Contexts/FontContext';

enum scale {
  SCALEDOWN,
  SCALEUP,
}

const Settings = () => {
  const dyslexicFontFamily = {
    regular: 'OpenDyslexic Regular',
    bold: 'OpenDyslexic Bold',
    italic: 'OpenDyslexic Italic',
    bolditalic: 'OpenDyslexic BoldItalic',
  };

  const sansSerifFontFamily = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    bolditalic: 'Roboto-BoldItalic',
  };
  const {selectedFontFamily, setSelectedFontFamily} = useFontContext();
  const [isEnabled, setIsEnabled] = useState(
    selectedFontFamily.regular === dyslexicFontFamily.regular,
  );
  const styles = getStyles(selectedFontFamily);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const handleScale = (scaling: scale) => {
    console.log(scaling);
  };

  useEffect(() => {
    console.log(isEnabled);
    setSelectedFontFamily(isEnabled ? dyslexicFontFamily : sansSerifFontFamily);
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Settings</Text>
        <View>
          <View style={styles.option}>
            <Text
              style={[styles.optionText, {fontFamily: 'OpenDyslexic Regular'}]}>
              Enable dyslexic font
            </Text>
            <Switch
              trackColor={{false: '#afafaf', true: '#007337'}}
              thumbColor={isEnabled ? '#007447' : '#adadad'}
              onValueChange={toggleSwitch}
              value={isEnabled}
              ios_backgroundColor={'#adadad'}
            />
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Font size</Text>
            <View style={styles.fontButtons}>
              <Button
                onTouchEnd={() => handleScale(scale.SCALEDOWN)}
                id="scaleDown">
                <Icon source="minus-thick" color={'#afafaf'} size={24} />
              </Button>
              <Text style={styles.fontButton}>1x</Text>
              <Button onTouchEnd={() => handleScale(scale.SCALEUP)}>
                <Icon source="plus-thick" color={'#afafaf'} size={24} />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
