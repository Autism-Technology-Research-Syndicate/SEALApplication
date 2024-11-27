import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface FontConfigType {
  regular: string;
  bold: string;
  italic: string;
  bolditalic: string;
  fontScale: number;
}

export interface ConfigType {
  font: FontConfigType;
  brightness: number;
  colorblindMode: boolean;
  notification: boolean;
  videoResolution: boolean;
  audioSensitivity: boolean;
  lightSensitivity: boolean;
}

interface SettingsContextType {
  selectedConfig: ConfigType;
  setSelectedConfig: (config: ConfigType) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

interface SettingsContextProviderType {
  children: ReactNode;
}

export const SettingsContextProvider: React.FC<SettingsContextProviderType> = ({
  children,
}) => {
  const sansSerifFontFamily: FontConfigType = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    bolditalic: 'Roboto-BoldItalic',
    fontScale: 1,
  };

  const initialConfig: ConfigType = {
    font: sansSerifFontFamily,
    brightness: 0.75,
    colorblindMode: false,
    notification: false,
    videoResolution: false,
    audioSensitivity: false,
    lightSensitivity: false,
  };

  const [selectedConfig, setSelectedConfig] = useState(initialConfig);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem('selectedConfig');
        if (savedSettings) {
          setSelectedConfig(JSON.parse(savedSettings));
        }
      } catch (error) {
        setSelectedConfig(initialConfig);
      }
    };

    loadSettings();
  }, []);

  const saveSettingsSelection = async (settingsConfig: ConfigType) => {
    try {
      await AsyncStorage.setItem(
        'selectedConfig',
        JSON.stringify(settingsConfig),
      );
      setSelectedConfig(settingsConfig);
    } catch (error) {
      console.error('Failed to save settings selection!');
    }
  };
  return (
    <SettingsContext.Provider
      value={{selectedConfig, setSelectedConfig: saveSettingsSelection}}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) throw new Error('Settings not set up correctly!');
  return context;
};
