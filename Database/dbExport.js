import RNFS from 'react-native-fs';
import SQLite from 'react-native-sqlite-storage';
import Share from 'react-native-share';

export const exportDatabase = () => {
  return new Promise((resolve, reject) => {
    const DB_NAME = 'mydatabase.db';

    SQLite.openDatabase(
      {
        name: DB_NAME,
        location: 'default',
      },
      db => {
        console.log('Database opened successfully for export');

        const dbPathQuery = 'PRAGMA database_list';
        db.transaction(tx => {
          tx.executeSql(
            dbPathQuery,
            [],
            (tx, resultSet) => {
              const rows = resultSet.rows.raw();
              const dbPath = rows[0].file;
              console.log('Database path:', dbPath);

              if (!dbPath) {
                reject(new Error('Database path is undefined'));
                return;
              }

              const exportPath = `${RNFS.ExternalDirectoryPath}/${DB_NAME}_export`;

              RNFS.copyFile(dbPath, exportPath)
                .then(() => {
                  console.log('Database exported successfully to:', exportPath);
                  resolve(exportPath);
                })
                .catch(error => {
                  console.error('Error exporting database:', error);
                  reject(error);
                });
            },
            error => {
              console.error('Error retrieving database path:', error);
              reject(error);
            },
          );
        });
      },
      error => {
        console.error('Error opening database for export:', error);
        reject(error);
      },
    );
  });
};

// Function to share the database via email
export const shareDatabase = async exportPath => {
  console.log(exportPath);
  try {
    const shareOptions = {
      title: 'Database File',
      url: `file://${exportPath}`,
      subject: 'SEAL Database Export',
      message: 'SEAL database export file.',
      email: '', // You can set a default email address if needed
    };

    const result = await Share.open(shareOptions);

    if (result.action === Share.sharedAction) {
      console.log('Database shared successfully');
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing database:', error);
  }
};
