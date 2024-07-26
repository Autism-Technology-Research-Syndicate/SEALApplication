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

  db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS curriculum (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           input_output INTEGER,
           sequence INTEGER,
           content TEXT

        )`,
        [],
        () => { console.log('Curriculum table created successfully.'); },
        (tx, error) => { console.error('Error creating table', error); }
      );
    });

  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        picture TEXT,
        estimatedAttentionSpan INTEGER,
        levelOfSpectrum INTEGER,
        settingsChoices TEXT,
        progressInCurriculum INTEGER,
        averageAccuracy INTEGER,
        description TEXT,
        necessaryBreakTime INTEGER
      )`,
      [],
      () => {
        console.log('users Table created successfully - in dbInitialization.');
      },
      (_, error) => {
        console.error('Error creating table', error);
      },
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

//Insert a new row into the curriculum table
const insertCurriculumData = (input_output, sequence, content) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO curriculum (input_output, sequence, content) VALUES (?, ?, ?)',
      [input_output, sequence, content],
      (_, result) => { console.log(`A row has been inserted with rowid ${result.insertId}`); },
      (tx, error) => { console.error('Error inserting data', error); }
    );
  });
};

const printCurriculumFirstRow = () => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM curriculum LIMIT 1',
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

  // Insert a new row into the users table
const insertUser = (
  name,
  picture,
  estimatedAttentionSpan,
  levelOfSpectrum,
  settingsChoices,
  progressInCurriculum,
  averageAccuracy,
  description,
  necessaryBreakTime,
) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'INSERT INTO users (name, picture, estimatedAttentionSpan, levelOfSpectrum, settingsChoices, progressInCurriculum, averageAccuracy, description, necessaryBreakTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          name,
          picture,
          estimatedAttentionSpan,
          levelOfSpectrum,
          settingsChoices,
          progressInCurriculum,
          averageAccuracy,
          description,
          necessaryBreakTime,
        ],
        (_, result) => {
          console.log(
            `A row has been inserted in the user table with rowid ${result.insertId}`,
          );
        },
        (_, error) => {
          console.error('Error inserting user data', error.message);
        },
      );
    },
    error => {
      console.error('Transaction error:', error.message); //
    },
    () => {
      console.log('Transaction completed successfully');
    },
  );
};

// Retrieve all rows from the users table
const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (_, result) => {
          const users = result.rows.raw();
          console.log('Users:', users);
          resolve(users);
        },
        (_, error) => { reject(error); }
      );
    });
  });
};

// Create the table in the db for the input, output, score called Combos
const createCombosTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Combos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        score DECIMAL(12, 10),
        input TEXT,
        output TEXT,
      )`,
      [],
      () => {
        console.log('Combos Table created successfully - in dbInitialization.');
      },
      (_, error) => {
        console.error('Error creating table or exists', error);
      },
    );
  });

  // Create the index on the score column
  db.transaction(tx => {
    tx.executeSql(
      `CREATE INDEX IF NOT EXISTS idx_score ON Combos(score)`,
      [],
      () => { console.log('Index created successfully.'); },
      (tx, error) => { console.error('Error creating index', error); }
    );
  });
};

// Insert a new row into the Combos table
const insertComboData = (score, input, output) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Combos (score, input, output) VALUES (?, ?, ?)',
      [score, input, output],
      (_, result) => { console.log(`A row has been inserted with rowid ${result.insertId}`); },
      (tx, error) => { console.error('Error inserting data', error); }
    );
  });
};

// Update combo data in Combos table
const updateComboData = (score, id) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE Combos SET score = ? WHERE id = ?',
      [score, id],
      (_, result) => { console.log(`Row(s) updated: ${result.rowsAffected}`); },
      (tx, error) => { console.error('Error updating data', error); }
    );
  });
};

// Delete a row from the Combos table
const deleteComboData = (id) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM Combos WHERE id = ?',
      [id],
      (_, result) => { console.log(`Row(s) deleted: ${result.rowsAffected}`); },
      (tx, error) => { console.error('Error deleting data', error); }
    );
  });
};
// Access the table Combos and return combo that has score closest to 1
const getBestComboData= () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT input, output, score FROM Combos ORDER BY ABS(score - 1) LIMIT 1',
        [],
        (_, result) => { resolve(result.rows.raw()); },
        (tx, error) => { reject(error); },
      );
    });
  });
};


// Export functions
export {
  createCombosTable,
  insertComboData,
  updateComboData,
  deleteComboData,
  getBestComboData,

  initializeDatabase,
  insertImageData,
  getImageData,
  updateImageData,
  deleteImageData,
  printFirstRow,
  insertUser,
  getUsers,
  printCurriculumFirstRow,
  insertCurriculumData,
};
