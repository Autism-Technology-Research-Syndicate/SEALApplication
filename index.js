/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  initializeDatabase,
  testDb,
} from './Database/dbInitialization';

import { exportDatabase, shareDatabase } from './Database/dbExport';
import { getSlopeDataFromDB } from './Database/dbUtilities';
// import { getUsers } from './dbTesting.cjs';

AppRegistry.registerComponent(appName, () => App);
console.log("in index.js");

const setupDatabase = async () => {
  try {
    await initializeDatabase();
    console.log('Database setup completed');
    // uncomment to test the database
    // await testDb();
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};

setupDatabase();

// uncomment to export the database
//.then(() => {
//  console.log('### Database setup completed');
//  return exportDatabase();
//}).then((exportPath) => {
//  console.log('### Database export completed');
//  return shareDatabase(exportPath); // //"/data/data/com.sealapplication7/databases/mydatabase.db"
//}).catch((error) => {
//  console.error('### Error:', error);
//});
