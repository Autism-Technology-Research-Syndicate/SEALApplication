import React, {createContext, useContext, useState} from 'react';

const ColorblindContext = createContext();

export const ColorblindProvider = ({children}) => {
  const [filterType, setFilterType] = useState('none');

  return (
    <ColorblindContext.Provider value={{filterType, setFilterType}}>
      {children}
    </ColorblindContext.Provider>
  );
};

export const useColorblind = () => useContext(ColorblindContext);
