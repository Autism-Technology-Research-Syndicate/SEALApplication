/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  initializeDatabase,
  insertImageData,
  getImageData,
  updateImageData,
  deleteImageData,
  printFirstRow,
  insertCurriculumData,
  printCurriculumFirstRow
} from './Database/dbInitialization';

import { exportDatabase, shareDatabase } from './Database/dbExport';

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

setupDatabase();
// if want to export the database
//  .then(() => {
//    console.log('### Database setup completed');
//    return exportDatabase();
//  })
//  .then((exportPath) => {
//    console.log('### Database export completed');
//    return shareDatabase(exportPath);
//  })
//  .catch((error) => {
//    console.error('### Error:', error);
//  });