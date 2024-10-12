import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
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

interface FontContextType {
  selectedFontConfig: FontConfigType;
  setSelectedFontConfig: (fontConfig: FontConfigType) => void;
}

export const FontContext = createContext<FontContextType | undefined>(
  undefined,
);

interface FontContextProviderType {
  children: ReactNode;
}

export const FontContextProvider: React.FC<FontContextProviderType> = ({
  children,
}) => {
  const sansSerifFontFamily: FontConfigType = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    bolditalic: 'Roboto-BoldItalic',
    fontScale: 1,
  };

  const [selectedFontConfig, setSelectedFontConfig] =
    useState(sansSerifFontFamily);

  useEffect(() => {
    const loadFont = async () => {
      try {
        const savedFont = await AsyncStorage.getItem('selectedFont');
        if (savedFont) {
          setSelectedFontConfig(JSON.parse(savedFont));
        }
      } catch (error) {
        console.error('Failed to save font selection!');
      }
    };

    loadFont();
  }, []);

  const saveFontSelection = async (fontConfig: FontConfigType) => {
    try {
      await AsyncStorage.setItem('selectedFont', JSON.stringify(fontConfig));
      setSelectedFontConfig(fontConfig);
    } catch (error) {
      console.error('Failed to save font selection!');
    }
  };
  return (
    <FontContext.Provider
      value={{selectedFontConfig, setSelectedFontConfig: saveFontSelection}}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontContext = () => {
  const context = useContext(FontContext);
  if (context === undefined) throw new Error('Fonts not set up correctly!');
  return context;
};
