
import {
    createCombosTable,
    insertComboData,
    updateComboData,
    deleteComboData,
    getBestComboData,

    insertImageData,
    getImageData,
    updateImageData,
    deleteImageData,
    initializeDatabase
  } from './dbInitialization.js';
  
  // Function to demonstrate all operations
  async function demo() {
    try {
      // initialize the db
      initializeDatabase();
      // Insert image data
      console.log('Inserting image data...');
      await insertImageData('base64data1', 1, 2);
      await insertImageData('base64data2', 3, 4);
  
      // Get all image data
      console.log('Fetching image data...');
      const imageData = await getImageData();
      console.log('Image data:', imageData);
  
      // Update image data
      console.log('Updating image data...');
      await updateImageData('updatedBase64data', 1);
  
      // Get updated image data
      console.log('Fetching updated image data...');
      const updatedImageData = await getImageData();
      console.log('Updated image data:', updatedImageData);
  
      // Delete image data
      console.log('Deleting image data...');
      await deleteImageData(2);
  
      // Get remaining image data
      console.log('Fetching remaining image data...');
      const remainingImageData = await getImageData();
      console.log('Remaining image data:', remainingImageData);
  

      // Create the Combos table
      createCombosTable();

      // Insert combo data
      await insertComboData(0.1345678, 3, 2);
      await insertComboData(0.1345678, 4, 2);

      // Get all bestCombo data
      console.log('Fetching best combo data...');
      const bestCombo = await getBestComboData();
      console.log('Best combo data:', bestCombo);
  
      // Update Combo data
      console.log('Updating combo data...');
      await updateComboData(0.3456543, 1);

      // Delete Combo data
      console.log('Deleting combo data...');
      await deleteComboData(2);



      //User Settings Demo
      // await createSettingsTable()
      
      const defaultSettings = {
        featureA: 1,
        featureB: 0,
        featureC: 1,
        featureD: 0,
        featureE: 1,
        featureF: 0,
        featureG: 1,
        featureH: 1
      };
  
      // Save user settings
      await updateUserSettings('user123', defaultSettings);
      console.log('User settings saved or updated.');
  
      // Retrieve user settings
      const settings = await getUserSettings('user123');
      console.log('Retrieved user settings:', settings);
  

      // Close the database connection (optional in most cases)
      // Note: React Native SQLite databases are usually kept open throughout the app lifecycle
      // unless specifically closed.
  
      // You may handle database closing in a different manner in a real production setting,
      // this is usually handled implicitly by react-native-sqlite-storage.




      
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Run the demo
  demo();
  