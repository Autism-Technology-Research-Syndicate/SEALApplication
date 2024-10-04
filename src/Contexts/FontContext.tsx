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

export interface FontFamilyType {
  regular: string;
  bold: string;
  italic: string;
  bolditalic: string;
}

interface FontContextType {
  selectedFontFamily: FontFamilyType;
  setSelectedFontFamily: (fontFamily: FontFamilyType) => void;
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
  const sansSerifFontFamily = {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    italic: 'Roboto-Italic',
    bolditalic: 'Roboto-BoldItalic',
  };

  const [selectedFontFamily, setSelectedFontFamily] =
    useState(sansSerifFontFamily);

  useEffect(() => {
    const loadFont = async () => {
      try {
        const savedFont = await AsyncStorage.getItem('selectedFont');
        if (savedFont) {
          setSelectedFontFamily(JSON.parse(savedFont));
        }
      } catch (error) {
        console.error('Failed to save font selection!');
      }
    };

    loadFont();
  }, []);

  const saveFontSelection = async (fontFamily: FontFamilyType) => {
    try {
      await AsyncStorage.setItem('selectedFont', JSON.stringify(fontFamily));
      setSelectedFontFamily(fontFamily);
    } catch (error) {
      console.error('Failed to save font selection!');
    }
  };
  return (
    <FontContext.Provider
      value={{selectedFontFamily, setSelectedFontFamily: saveFontSelection}}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontContext = () => {
  const context = useContext(FontContext);
  if (context === undefined) throw new Error('Fonts not set up correctly!');
  return context;
};
