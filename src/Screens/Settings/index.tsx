import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  Switch,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {getStyles} from './defaultCSS';
import {useNotification} from '../../Features/useNotification';
import {
  FontConfigType,
  useSettingsContext,
} from '../../Contexts/SettingsContext';
import {NavigationProp} from '@react-navigation/native';
import {Icon} from 'react-native-paper';

const enum SettingsToggle {
  videoResolution,
  brightnessUp,
  brightnessDown,
  colorblindMode,
  fontSizeUp,
  fontSizeDown,
  dyslexicFont,
  audioSensitivity,
  lightSensitivity,
  notification,
}

const Index = ({navigation}: {navigation: NavigationProp<any>}) => {
  const {width, height} = Dimensions.get('window');
  const {selectedConfig, setSelectedConfig} = useSettingsContext();
  const styles = getStyles(selectedConfig.font);

  const sansSerifFontFamily: FontConfigType = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    bolditalic: 'Roboto-BoldItalic',
    fontScale: selectedConfig.font.fontScale,
  };
  const dyslexicFontFamily: FontConfigType = {
    regular: 'OpenDyslexic Regular',
    bold: 'OpenDyslexic Bold',
    italic: 'OpenDyslexic Italic',
    bolditalic: 'OpenDyslexic Bold-Italic',
    fontScale: selectedConfig.font.fontScale,
  };

  const {
    displayNotification,
    displayTriggerNotification,
    getTriggerNotificationIds,
    cancelTriggerNotifications,
    cancelAllNotifications,
    openNotificationSettings,
  } = useNotification();

  const handleDisplayNotification = () => {
    displayNotification('Hello', 'This is a notification');
  };

  const [enableDyslexicFont, setEnableDyslexicFont] = useState(
    selectedConfig.font.regular === dyslexicFontFamily.regular,
  );
  const isTablet = width > 640;
  const [fontScaleLimit, setFontScaleLimit] = useState(
    enableDyslexicFont ? (!isTablet ? 1.2 : 1.5) : !isTablet ? 1.5 : 2.0,
  );

  const handleToggleSwitch = (option: SettingsToggle) => {
    switch (option) {
      case SettingsToggle.dyslexicFont:
        setEnableDyslexicFont(!enableDyslexicFont);
        break;

      case SettingsToggle.fontSizeDown:
        if (selectedConfig.font.fontScale > 0.6)
          setSelectedConfig({
            ...selectedConfig,
            font: {
              ...selectedConfig.font,
              fontScale: Math.max(0.6, selectedConfig.font.fontScale - 0.1),
            },
          });
        break;

      case SettingsToggle.fontSizeUp:
        if (selectedConfig.font.fontScale < fontScaleLimit)
          setSelectedConfig({
            ...selectedConfig,
            font: {
              ...selectedConfig.font,
              fontScale: Math.min(
                fontScaleLimit,
                selectedConfig.font.fontScale + 0.1,
              ),
            },
          });
        break;

      case SettingsToggle.brightnessDown:
        if (selectedConfig.brightness > 0)
          setSelectedConfig({
            ...selectedConfig,
            brightness: Math.max(0, selectedConfig.brightness - 0.1),
          });
        break;

      case SettingsToggle.brightnessUp:
        if (selectedConfig.brightness < 1)
          setSelectedConfig({
            ...selectedConfig,
            brightness: Math.min(1, selectedConfig.brightness + 0.1),
          });
        break;

      case SettingsToggle.videoResolution:
        setSelectedConfig({
          ...selectedConfig,
          videoResolution: !selectedConfig.videoResolution,
        });
        break;

      case SettingsToggle.colorblindMode:
        setSelectedConfig({
          ...selectedConfig,
          colorblindMode: !selectedConfig.colorblindMode,
        });
        break;

      case SettingsToggle.audioSensitivity:
        setSelectedConfig({
          ...selectedConfig,
          audioSensitivity: !selectedConfig.audioSensitivity,
        });
        break;

      case SettingsToggle.lightSensitivity:
        setSelectedConfig({
          ...selectedConfig,
          lightSensitivity: !selectedConfig.lightSensitivity,
        });
        break;

      case SettingsToggle.notification:
        if (selectedConfig.notification) {
          cancelAllNotifications();
        }
        setSelectedConfig({
          ...selectedConfig,
          notification: !selectedConfig.notification,
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (enableDyslexicFont) {
      setFontScaleLimit(!isTablet ? 1.2 : 1.5);
      setSelectedConfig({
        ...selectedConfig,
        font: {
          ...dyslexicFontFamily,
          fontScale: Math.min(
            !isTablet ? 1.2 : 1.5,
            selectedConfig.font.fontScale,
          ),
        },
      });
    } else {
      setFontScaleLimit(!isTablet ? 1.5 : 2.0);
      setSelectedConfig({
        ...selectedConfig,
        font: {
          ...sansSerifFontFamily,
          fontScale: Math.min(
            !isTablet ? 1.5 : 2.0,
            selectedConfig.font.fontScale,
          ),
        },
      });
    }
  }, [enableDyslexicFont]);

  useEffect(() => {}, [selectedConfig]);

  return (
    <>
      <ScrollView
        style={styles.container}
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              zIndex: 1,
              padding: 10,
            }}>
            <Icon size={34} source="arrow-left" />
          </TouchableOpacity>

          <Text style={styles.header}>Settings</Text>

          <View style={styles.content}>
            <View style={styles.settingOption}>
              <Text style={styles.text}>Video Resolution</Text>
              <Switch
                value={selectedConfig.videoResolution}
                onValueChange={() =>
                  handleToggleSwitch(SettingsToggle.videoResolution)
                }
                thumbColor={
                  selectedConfig.videoResolution ? '#305070' : '#eeeeee'
                } // corrected color
              />
            </View>

            <View style={styles.settingOption}>
              <Text style={styles.text}>Brightness/ Contrast</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    handleToggleSwitch(SettingsToggle.brightnessDown)
                  }>
                  <Text>
                    <Icon
                      size={20}
                      source="minus-thick"
                      color={
                        selectedConfig.brightness > 0 ? '#305070' : '#aaaaaa'
                      }
                    />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.value}>
                  {(selectedConfig.brightness * 100).toFixed(0)}%
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    handleToggleSwitch(SettingsToggle.brightnessUp)
                  }>
                  <Text>
                    <Icon
                      size={20}
                      source="plus-thick"
                      color={
                        selectedConfig.brightness < 1 ? '#305070' : '#aaaaaa'
                      }
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingOption}>
              <Text style={styles.text}>Colorblind Mode</Text>
              <Switch
                value={selectedConfig.colorblindMode}
                onValueChange={() =>
                  handleToggleSwitch(SettingsToggle.colorblindMode)
                }
                thumbColor={
                  selectedConfig.colorblindMode ? '#305070' : '#eeeeee'
                }
              />
            </View>

            <View style={styles.settingOption}>
              <Text
                style={{
                  ...styles.text,
                  fontFamily: dyslexicFontFamily.regular,
                  lineHeight: styles.text.fontSize * 1.6,
                }}>
                Dyslexic Font
              </Text>
              <Switch
                value={enableDyslexicFont}
                onValueChange={() =>
                  handleToggleSwitch(SettingsToggle.dyslexicFont)
                }
                thumbColor={enableDyslexicFont ? '#305070' : '#eeeeee'} // corrected color
              />
            </View>

            <View style={styles.settingOption}>
              <Text style={styles.text}>Font Size</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    handleToggleSwitch(SettingsToggle.fontSizeDown)
                  }>
                  <Text>
                    <Icon
                      size={20}
                      source="minus-thick"
                      color={
                        selectedConfig.font.fontScale > 0.6
                          ? '#305070'
                          : '#aaaaaa'
                      }
                    />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.value}>
                  {selectedConfig.font.fontScale.toFixed(1)}x
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleToggleSwitch(SettingsToggle.fontSizeUp)}>
                  <Text>
                    <Icon
                      size={20}
                      source="plus-thick"
                      color={
                        selectedConfig.font.fontScale < fontScaleLimit
                          ? '#305070'
                          : '#aaaaaa'
                      }
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingOption}>
              <Text style={styles.text}>Audio Sensitivities</Text>
              <Switch
                value={selectedConfig.audioSensitivity}
                onValueChange={() =>
                  handleToggleSwitch(SettingsToggle.audioSensitivity)
                }
                thumbColor={
                  selectedConfig.audioSensitivity ? '#305070' : '#eeeeee'
                } // corrected color
              />
            </View>

            <View style={styles.settingOption}>
              <Text style={styles.text}>Light Sensitivities</Text>
              <Switch
                value={selectedConfig.lightSensitivity}
                onValueChange={() =>
                  handleToggleSwitch(SettingsToggle.lightSensitivity)
                }
                thumbColor={
                  selectedConfig.lightSensitivity ? '#305070' : '#eeeeee'
                } // corrected color
              />
            </View>

            <View style={styles.settingOption}>
              <Text style={styles.text}>Notification Preferences</Text>
              <Switch
                value={selectedConfig.notification}
                onValueChange={() =>
                  handleToggleSwitch(SettingsToggle.notification)
                }
                thumbColor={selectedConfig.notification ? '#305070' : '#eeeeee'} // corrected color
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Index;
