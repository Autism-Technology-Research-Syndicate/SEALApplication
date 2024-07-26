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
  printCurriculumFirstRow,
  insertUser,
  getUsers,
} from './Database/dbInitialization';

import { exportDatabase, shareDatabase } from './Database/dbExport';
// import { getUsers } from './dbTesting.cjs';

AppRegistry.registerComponent(appName, () => App);

const setupDatabase = async () => {
  try {
    initializeDatabase();

    await insertImageData('test_base64_string', 1, 2);

    await printFirstRow();

    await insertCurriculumData(0, 5, "Testing curriculum");

    await printCurriculumFirstRow();

    // Example call to insertUser with test data
    const testUser = {
      name: 'John Smith',
      picture: 'path/to/picture.jpg',
      estimatedAttentionSpan: 30,
      settingsChoices: '{"sound": "low", "brightness": "medium"}',
      progressInCurriculum: 0,
      averageAccuracy: 75.5,
      description: 'A brief description of John Doe.',
      necessaryBreakTime: 15,
    };

    console.log('Inserting user:', testUser);
    await insertUser(
      testUser.name,
      testUser.picture,
      testUser.estimatedAttentionSpan,
      testUser.settingsChoices,
      testUser.progressInCurriculum,
      testUser.averageAccuracy,
      testUser.description,
      testUser.necessaryBreakTime,
    );

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
const allUsers = getUsers();
console.log('All users:', allUsers);
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
