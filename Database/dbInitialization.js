import SQLite from 'react-native-sqlite-storage';

// Open or create the SQLite database
const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => { console.log('Database opened successfully'); },
  error => { console.error('Error opening database', error); }
);

// Initialize the database
const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS imgdp (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        b64str TEXT,
        input INTEGER,
        output INTEGER
      )`,
      [],
      () => { console.log('Table created successfully.'); },
      (tx, error) => { console.error('Error creating table', error); }
    );
  });
};

// Insert a new row into the imgdp table
const insertImageData = (b64str, input, output) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO imgdp (b64str, input, output) VALUES (?, ?, ?)',
      [b64str, input, output],
      (_, result) => { console.log(`A row has been inserted with rowid ${result.insertId}`); },
      (tx, error) => { console.error('Error inserting data', error); }
    );
  });
};

// Retrieve all rows from the imgdp table
const getImageData = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM imgdp',
        [],
        (_, result) => { resolve(result.rows.raw()); },
        (tx, error) => { reject(error); }
      );
    });
  });
};

// Update a row in the imgdp table
const updateImageData = (b64str, id) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE imgdp SET b64str = ? WHERE id = ?',
      [b64str, id],
      (_, result) => { console.log(`Row(s) updated: ${result.rowsAffected}`); },
      (tx, error) => { console.error('Error updating data', error); }
    );
  });
};

// Delete a row from the imgdp table
const deleteImageData = (id) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM imgdp WHERE id = ?',
      [id],
      (_, result) => { console.log(`Row(s) deleted: ${result.rowsAffected}`); },
      (tx, error) => { console.error('Error deleting data', error); }
    );
  });
};
// Function to print the first row of the imgdp table
const printFirstRow = () => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM imgdp LIMIT 1',
      [],
      (_, { rows }) => {
        if (rows.length > 0) {
          console.log('First row data:', rows.item(0));
        } else {
          console.log('No data found.');
        }
      },
      (tx, error) => { console.error('Error querying data', error); }
    );
  });
};

// Export functions
export {
  initializeDatabase,
  insertImageData,
  getImageData,
  updateImageData,
  deleteImageData,
  printFirstRow
};
