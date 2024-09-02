/**
 * DeveloperMode.tsx
 * 
 * This component renders the Developer Mode interface, providing
 * various options for developers to access and test different
 * functionalities of the application.
 */

import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Clipboard  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './defaultCSS';
import { exportDatabase } from '../../../Database/dbExport';

/**
 * DeveloperMode Component
 * 
 * Displays a list of developer options as touchable buttons.
 * Each option, when pressed, triggers a specific action or navigation.
 */



const DeveloperMode = () => {
    // Hook to access navigation object
  const navigation = useNavigation();

  // State to store export status

  const [exportStatus, setExportStatus] = useState<string | null>(null);

  // Function to handle database export

  const handleExportDB = async () => {
    try {
      setExportStatus('Exporting...');
      const exportPath = await exportDatabase();
      setExportStatus(`Exported to: ${exportPath}`);
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus('Export failed');
    }
  };

  // Function to clear export status

  const clearExportStatus = () => {
    setExportStatus(null);
  };

  //Temporary options for developer mode
  const options = [
    { title: 'Camera', icon: '📷', onPress: () => console.log('Camera component opens') },
    { title: 'Logs', icon: '📝', onPress: () => console.log('Logs viewed') },
    { title: 'Network', icon: '🌐', onPress: () => console.log('Network info viewed') },
    { title: 'Storage', icon: '💾', onPress: () => console.log('Storage info viewed') },
    { title: 'Debug', icon: '🐞', onPress: () => console.log('Debug mode toggled') },
    { title: 'Export DB', icon: '📤', onPress: handleExportDB },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Developer Mode</Text>
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={option.onPress}>
            <Text style={styles.optionIcon}>{option.icon}</Text>
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/*  Export status after pressing export button */}
      {exportStatus && (
         <View style={styles.statusContainer}>
         <Text style={styles.statusText}>{exportStatus}</Text>
         <TouchableOpacity style={styles.closeButton} onPress={clearExportStatus}>
           <Text style={styles.closeButtonText}>Close</Text>
         </TouchableOpacity>
       </View>
        )}
    </View>
  </View>
  );
};

export default DeveloperMode;
