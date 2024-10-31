/**
 * DeveloperModeContext.tsx
 * 
 * This file defines the context and provider for managing the developer mode
 * functionality across the SEAL application.
 */


import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

/**
 * Interface defining the shape of the context value
 */

interface DeveloperModeContextType {
  isDeveloperModeActive: boolean;
  isCameraActive: boolean;
  openDeveloperMode: () => void;
  closeDeveloperMode: () => void;
  activateCamera: () => void;
  deactivateCamera: () => void; 
}

// Create the context with undefined as initial value
const DeveloperModeContext = createContext<DeveloperModeContextType | undefined>(undefined);

/**
 * Props for the DeveloperModeProvider component
 */

interface DeveloperModeProviderProps {
  children: ReactNode;
}


/**
 * DeveloperModeProvider Component
 * 
 * This component provides the DeveloperModeContext to its children.
 * It manages the state of the developer mode and provides functions to open and close it.
 * 
 * @param {ReactNode} children - Child components that will have access to the context
 */

export const DeveloperModeProvider: React.FC<DeveloperModeProviderProps> = ({ children }) => {
    // State to track if developer mode is active
  const [isDeveloperModeActive, setIsDeveloperModeActive] = useState(false);
    // State to track the number of taps for activating developer mode
  const [tapCount, setTapCount] = useState(0);

  const [isCameraActive, setIsCameraActive] = useState(false);

   /**
   * Function to handle opening the developer mode
   * It increments the tap count and activates developer mode after 15 taps
   */

  const openDeveloperMode = useCallback(() => {
    setTapCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 15) {
        setIsDeveloperModeActive((prev) => !prev);
        return 0;  // Reset tap count after activation
      }
      return newCount;
    });
  }, []);

  const closeDeveloperMode = useCallback(() => {
    setIsDeveloperModeActive(false);
    setIsCameraActive(false);
    setTapCount(0); // Reset tap count when closing
  }, []);

  const activateCamera = useCallback(() => {
    setIsCameraActive(true);
  }, []);

  const deactivateCamera = useCallback(() => {
    setIsCameraActive(false);
  }, []);

  // Context value that will be provided to consumers
  const contextValue = {
    isDeveloperModeActive,
    isCameraActive,
    openDeveloperMode,
    closeDeveloperMode,
    activateCamera,
    deactivateCamera
  };

  return (
    <DeveloperModeContext.Provider value={contextValue}>
      {children}
    </DeveloperModeContext.Provider>
  );
};

/**
 * Custom hook to use the DeveloperModeContext
 * 
 * This hook provides an easy way for components to consume the DeveloperModeContext.
 * It also ensures that the hook is used within a DeveloperModeProvider.
 * 
 * @throws {Error} If used outside of a DeveloperModeProvider
 * @returns {DeveloperModeContextType} The context value
 */

export const useDeveloperMode = () => {
  const context = useContext(DeveloperModeContext);
  if (context === undefined) {
    throw new Error('useDeveloperMode must be used within a DeveloperModeProvider');
  }
  return context;
};