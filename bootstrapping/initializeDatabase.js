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
  printFirstRow,
  insertUser,
  getUsers,
} from '../Database/dbInitialization';
AppRegistry.registerComponent(appName, () => App);

const setupDatabase = async () => {
  try {
    initializeDatabase();

    await insertImageData('test_base64_string', 1, 2);

    await printFirstRow();

    // Example call to insertUser with test data
    const testUser =
{
      name: 'John Doe',
      picture: 'path/to/picture.jpg',
      estimatedAttentionSpan: 30,
      levelOfSpectrum: 'low',
      settingsChoices: '{"sound": "low", "brightness": "medium"}',
      progressInCurriculum: 0,
      averageAccuracy: 75.5,
      description: 'A brief description of John Doe.',
      necessaryBreakTime: 15,
    };
    await insertUser(
      testUser.name,
      testUser.picture,
      testUser.estimatedAttentionSpan,
      testUser.levelOfSpectrum,
      testUser.settingsChoices,
      testUser.progressInCurriculum,
      testUser.averageAccuracy,
      testUser.description,
      testUser.necessaryBreakTime,
    );

    const allUsers = await getUsers();
    console.log('All users:', allUsers);

    const allData = await getImageData();
    // updated not overwhelm the console
    console.log('All data:', allData[0]);

    if (allData.length > 0) {
      await updateImageData('updated_base64_string', allData[0].id);
    }

    console.log('Database setup completed');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
};
export {setupDatabase};
