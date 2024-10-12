import {View, Text, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStyles} from './defaultCSS';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {FontConfigType, useFontContext} from '../../Contexts/FontContext';

enum scale {
  SCALEDOWN,
  SCALEUP,
}

const Settings = () => {
  const {selectedFontConfig, setSelectedFontConfig} = useFontContext();
  const dyslexicFontFamily: FontConfigType = {
    regular: 'OpenDyslexic Regular',
    bold: 'OpenDyslexic Bold',
    italic: 'OpenDyslexic Italic',
    bolditalic: 'OpenDyslexic BoldItalic',
    fontScale: selectedFontConfig.fontScale,
  };

  const sansSerifFontFamily: FontConfigType = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    bolditalic: 'Roboto-BoldItalic',
    fontScale: selectedFontConfig.fontScale,
  };
  const [isEnabled, setIsEnabled] = useState(
    selectedFontConfig.regular === dyslexicFontFamily.regular,
  );
  const styles = getStyles(selectedFontConfig);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const handleScale = (scaling: scale) => {
    let currentScale = selectedFontConfig.fontScale;
    currentScale += scaling === scale.SCALEUP ? 0.2 : -0.1;
    const newFontConfig: FontConfigType = {
      ...selectedFontConfig,
      fontScale: currentScale,
    };
    setSelectedFontConfig(newFontConfig);
  };

  useEffect(() => {
    setSelectedFontConfig(isEnabled ? dyslexicFontFamily : sansSerifFontFamily);
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
              <Icon.Button
                backgroundColor={'transparent'}
                iconStyle={{marginRight: 0}}
                onPress={() => handleScale(scale.SCALEDOWN)}
                name="minus"
                color={'#afafaf'}
                size={24}></Icon.Button>
              <Text style={styles.fontButton}>
                {selectedFontConfig.fontScale.toFixed(1)}x
              </Text>
              <Icon.Button
                backgroundColor={'transparent'}
                iconStyle={{marginRight: 0}}
                onPress={() => handleScale(scale.SCALEUP)}
                name="plus"
                color={'#afafaf'}
                size={24}
                style={styles.fontButton}></Icon.Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
