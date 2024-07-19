/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from '../App';
import {name as appName} from '../app.json';
import {
  initializeDatabase,
  insertImageData,
  getImageData,
  updateImageData,
  deleteImageData,
  printFirstRow
} from '../Database/dbInitialization';

AppRegistry.registerComponent(appName, () => App);

const setupDatabase = async () => {
  try {
    initializeDatabase();

    await insertImageData('test_base64_string', 1, 2);

    await printFirstRow();

    const allData = await getImageData();
    console.log('All data:', allData);

    if (allData.length > 0) {
      await updateImageData('updated_base64_string', allData[0].id);
    }

    console.log('Database setup completed');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};


export {
setupDatabase
};