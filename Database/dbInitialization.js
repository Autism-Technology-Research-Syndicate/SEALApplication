import SQLite from 'react-native-sqlite-storage';
console.log("in dbInitialization.js");
// Open or create the SQLite database
const db = SQLite.openDatabase(
  { name: 'mydatabase.db', location: 'default' },
  () => { console.log('Database opened successfully'); },
  error => { console.error('Error opening database', error); }
);

const initializeDatabase = async () => {
  console.log("in initializeDatabase");
  console.log("creating tables");
      // Drop the existing users table before updating it. might be better to have a migrations file
    db.transaction(tx => {
      // Drop the existing users table
      tx.executeSql(
        `DROP TABLE IF EXISTS users`,
        [],
        () => {
          console.log('Old users table dropped successfully.');
        },
        (_, error) => {
          console.error('Error dropping table', error);
        },
      );
    });

  const createTable = (query, tableName) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          query,
          [],
          () => {
            console.log(`${tableName} table created successfully.`);
            resolve();
          },
          (tx, error) => {
            console.error(`Error creating ${tableName} table`, error);
            reject(error);
          }
        );
      });
    });
  };

  const imgdpTableQuery = `
    CREATE TABLE IF NOT EXISTS imgdp (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      b64str TEXT,
      input INTEGER,
      output INTEGER
    )`;

  const curriculumTableQuery = `
    CREATE TABLE IF NOT EXISTS curriculum (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      input_output INTEGER,
      sequence INTEGER,
      content TEXT
    )`;

  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      picture TEXT,
      estimatedAttentionSpan INTEGER,
      settingsChoices TEXT,
      progressInCurriculum INTEGER,
      averageAccuracy INTEGER,
      description TEXT,
      necessaryBreakTime INTEGER
    )`;

    const achievementsTableQuery = `
    CREATE TABLE IF NOT EXISTS achievements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      picture TEXT,
      points INTEGER,
      user_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`;

  return Promise.all([
    createTable(imgdpTableQuery, 'imgdp'),
    createTable(curriculumTableQuery, 'curriculum'),
    createTable(usersTableQuery, 'users'),
    createTable(achievementsTableQuery, 'achievements'),
  ])
  .then(() => {
    console.log('All tables created successfully.');
  })
  .catch(error => {
    console.error('Error initializing database', error);
    throw error;
  });
};

// Insert a new row into the imgdp table
const insertImageData = async (b64str, input, output) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO imgdp (b64str, input, output) VALUES (?, ?, ?)',
        [b64str, input, output],
        (_, result) => {
          console.log(`A row has been inserted with rowid ${result.insertId}`);
          resolve(result);
        },
        (tx, error) => {
          console.error('Error inserting data', error);
          reject(error);
        },
      );
    });
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
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM imgdp WHERE id = ?',
      [id],
      (_, result) => {
      console.log(`Row(s) deleted: ${result.rowsAffected}`);
      resolve(result);
      },
      (tx, error) => {
        console.error('Error deleting data', error);
        reject(error);
       },
    );
  });
});
};
// Function to print the first row of the imgdp table
const printFirstRow = () => {
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM imgdp LIMIT 1',
      [],
      (_, { rows }) => {
        if (rows.length > 0) {
          console.log('First row data:', rows.item(0));
          resolve(rows.item(0));
        } else {
          console.log('No data found.');
          resolve(null);
        }
      },
      (tx, error) => { console.error('Error querying data', error);
        reject(error);
       }
    );
  });
});
};


//Insert a new row into the curriculum table
const insertCurriculumData = (input_output, sequence, content) => {
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO curriculum (input_output, sequence, content) VALUES (?, ?, ?)',
      [input_output, sequence, content],
      (_, result) => { console.log(`A row has been inserted with rowid ${result.insertId}`);
      resolve(result);
    },
      (tx, error) => { console.error('Error inserting data', error);
      reject(error);
       }
    );
  });
});
};

const printCurriculumFirstRow = () => {
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM curriculum LIMIT 1',
      [],
      (_, { rows }) => {
        if (rows.length > 0) {
          console.log('First row data:', rows.item(0));
          resolve(rows.item(0));
        } else {
          console.log('No data found.');
          resolve(null);
        }
      },
      (tx, error) => { console.error('Error querying data', error);
        reject(error);
      }
    );
  });
});
};

  // Insert a new row into the users table
  const insertUser = (
    name,
    picture,
    estimatedAttentionSpan,
    settingsChoices,
    progressInCurriculum,
    averageAccuracy,
    description,
    necessaryBreakTime,
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql(
            'INSERT INTO users (name, picture, estimatedAttentionSpan, settingsChoices, progressInCurriculum, averageAccuracy, description, necessaryBreakTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              name,
              picture,
              estimatedAttentionSpan,
              settingsChoices,
              progressInCurriculum,
              averageAccuracy,
              description,
              necessaryBreakTime,
            ],
            (_, result) => {
              console.log(
                `A row has been inserted in the user table with rowid ${result.insertId} and name ${name}`,
              );
              resolve(result);
            },
            (_, error) => {
              console.error('Error inserting user data', error.message);
              reject(error);
            },
          );
        },
        error => {
          console.error('Transaction error:', error.message);
          reject(error); // Reject the promise if the transaction fails
        }
      );
    });
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
          // console.log('Users:', users);
          resolve(users);
        },
        (_, error) => { reject(error); }
      );
    });
  });
};

const getOneUser = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE id = ?',
        [id],
        (_, result) => {
          const user = result.rows.raw();
          console.log('User:', user);
          resolve(user);
        },
        (_, error) => { reject(error); }
      );
    });
  });
};

// Update a row in the users table
const updateUser = (id, updates) => {
  const fields = [];
  const values = [];

  if (updates.name !== undefined) {
    fields.push('name = ?');
    values.push(updates.name);
  }
  if (updates.picture !== undefined) {
    fields.push('picture = ?');
    values.push(updates.picture);
  }
  if (updates.estimatedAttentionSpan !== undefined) {
    fields.push('estimatedAttentionSpan = ?');
    values.push(updates.estimatedAttentionSpan);
  }
  if (updates.settingsChoices !== undefined) {
    fields.push('settingsChoices = ?');
    values.push(updates.settingsChoices);
  }
  if (updates.progressInCurriculum !== undefined) {
    fields.push('progressInCurriculum = ?');
    values.push(updates.progressInCurriculum);
  }
  if (updates.averageAccuracy !== undefined) {
    fields.push('averageAccuracy = ?');
    values.push(updates.averageAccuracy);
  }
  if (updates.description !== undefined) {
    fields.push('description = ?');
    values.push(updates.description);
  }
  if (updates.necessaryBreakTime !== undefined) {
    fields.push('necessaryBreakTime = ?');
    values.push(updates.necessaryBreakTime);
  }

  if (fields.length === 0) {
    console.log('No fields to update');
    return;
  }

  values.push(id);

  const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

  db.transaction(tx => {
    tx.executeSql(
      query,
      values,
      (_, result) => { console.log(`Row(s) updated: ${result.rowsAffected}`); },
      (_, error) => { console.error('Error updating data', error); }
    );
  });



};

  // delete a row from the users table
  const deleteUser = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM users WHERE id = ?',
        [id],
        (_, result) => { console.log(`Row(s) deleted: ${result.rowsAffected}`); },
        (_, error) => { console.error('Error deleting data', error); }
      );
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

// test the functions above

const testDb = async () => {
  console.log("running testDb");
 const allUsers = await getUsers();
  console.log('top user', allUsers[0]);
  console.log('second user', allUsers[1]);

  await insertImageData('test_base64_string', 1, 2);

  await printFirstRow();

  await insertCurriculumData(0, 5, "Testing curriculum");

  await printCurriculumFirstRow();

  // User tests
  // Example call to insertUser with test data
  const testUser = {
    name: 'John Test',
    picture: 'path/to/picture.jpg',
  estimatedAttentionSpan: 30,
  settingsChoices: '{"sound": "low", "brightness": "medium"}',
  progressInCurriculum: 0,
  averageAccuracy: 75.5,
  description: 'A brief description of John Doe.',
  necessaryBreakTime: 15,
};

const testUser2 = {
  name: 'Jane Test',
  picture: 'path/to/picture.jpg',
  estimatedAttentionSpan: 30,
  settingsChoices: '{"sound": "low", "brightness": "medium"}',
  progressInCurriculum: 0,
  averageAccuracy: 75.5,
  description: 'A brief description of Jane Doe.',
  necessaryBreakTime: 15,
};

console.log('Inserting user:', testUser);
insertUser(
  testUser.name,
  testUser.picture,
  testUser.estimatedAttentionSpan,
  testUser.settingsChoices,
  testUser.progressInCurriculum,
  testUser.averageAccuracy,
  testUser.description,
  testUser.necessaryBreakTime,
);

console.log('Inserting user:', testUser2);
insertUser(
  testUser2.name,
  testUser2.picture,
  testUser2.estimatedAttentionSpan,
  testUser2.settingsChoices,
  testUser2.progressInCurriculum,
  testUser2.averageAccuracy,
  testUser2.description,
  testUser2.necessaryBreakTime,
);
console.log('Getting one user:');
const oneUser = await getOneUser(3);
console.log('One user:', oneUser);

const allData = await getImageData();
console.log('All data:', allData[0]);

if (allData.length > 0) {
  updateImageData('updated_base64_string', allData[0].id);
}
 const user1 = await getOneUser(1);
  console.log('user1:', user1);
  updateUser(1, { name:'Billy Bob' });
  console.log('user1 after update:', user1);
  const user2 = await getOneUser(2);
  updateUser(2, { progressInCurriculum: 20, averageAccuracy: 20, necessaryBreakTime: 20 });
  console.log('user2 after update:', user2);
  // other tests
  // delete a user test
  const userToDelete = await getOneUser(3);
  console.log('userToDelete:', userToDelete);
  deleteUser(3);
  console.log(getOneUser(3), "should be null");
console.log("finished running testDb");
};

// testDb();

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
  getOneUser,
  updateUser,
  deleteUser,
  printCurriculumFirstRow,
  insertCurriculumData,
  testDb,
};
