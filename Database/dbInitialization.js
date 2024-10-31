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

//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS UserSettingsv3 (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         userId INTEGER,
//         featureA INTEGER DEFAULT 1 CHECK(featureA BETWEEN 0 AND 1),
//         featureB INTEGER DEFAULT 1 CHECK(featureB BETWEEN 0 AND 1),
//         featureC INTEGER DEFAULT 1 CHECK(featureC BETWEEN 0 AND 1),
//         featureD INTEGER DEFAULT 1 CHECK(featureD BETWEEN 0 AND 1),
//         featureE INTEGER DEFAULT 1 CHECK(featureE BETWEEN 0 AND 1),
//         featureF INTEGER DEFAULT 1 CHECK(featureF BETWEEN 0 AND 1),
//         featureG INTEGER DEFAULT 1 CHECK(featureG BETWEEN 0 AND 1),
//         featureH INTEGER DEFAULT 1 CHECK(featureH BETWEEN 0 AND 1),
//         FOREIGN KEY (userId) REFERENCES Users(id)


//       )`,
//       [],
//       () => {
//         console.log('usersettingsv3 Table created successfully - in dbInitialization.');
//       },

//       (_, error) => {
//         console.error('Error creating UserSettingsv3 table or exists or or or or or', error);
//       },
//     );

//     tx.executeSql(`
//     CREATE TRIGGER IF NOT EXISTS create_default_settings
//     AFTER INSERT ON Users
//     BEGIN
//         INSERT INTO UserSettingsv3 (userId)
//         VALUES (NEW.id);

//     END;
// `,
//       [],
//       () => {
//         console.log('users trigger created successfuly - in dbInitialization.');
//       },
//       (_, error) => {
//         console.error('Error creating trigger', error);
//       },
// );
// });

    // Drop the existing achievements table before updating it. might be better to have a migrations file
    db.transaction(tx => {
      // Drop the existing achievements table
      tx.executeSql(
        `DROP TABLE IF EXISTS achievements`,
        [],
        () => {
          console.log('Old achievements table dropped successfully.');
        },
        (_, error) => {
          console.error('Error dropping table', error);
        }
      );
    });

    // function to create tables
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

  const addColumnIfTableExists = (tableName, columnName, columnDefinition) => {
    return new Promise((resolve, reject) => {
      console.log(`Checking if column '${columnName}' exists in '${tableName}' table...`);
      db.transaction(tx => {
        // Query the table schema to check if the column exists
        tx.executeSql(
          `PRAGMA table_info(${tableName});`,  // This returns info about the columns in the table
          [],
          (_, result) => {
            // Check if the column exists
            const columnExists = Array.from({ length: result.rows.length }).some((_, i) => result.rows.item(i).name === columnName);

            if (columnExists) {
              console.log(`Column '${columnName}' already exists in '${tableName}' table. No changes needed.`);
              resolve();  // Resolve as no need to add the column
            } else {
              console.log(`Column '${columnName}' does not exist in '${tableName}' table. Adding column...`);
              // Add the column if it doesn't exist
              tx.executeSql(
                `ALTER TABLE ${tableName} ADD COLUMN ${columnDefinition};`,
                [],
                () => {
                  console.log(`Column '${columnName}' added to '${tableName}' table successfully.`);
                  resolve();  // Resolve after successfully adding the column
                },
                (tx, error) => {
                  // Handle any errors that occur while adding the column
                  console.error(`Error adding column '${columnName}' to '${tableName}' table:`, error?.message || "Unknown error");
                  reject(error);
                }
              );
            }
          },
          (tx, error) => {
            // Handle any errors that occur while querying the table schema
            console.error(`Error querying table info for '${tableName}':`, error?.message || "Unknown error");
            reject(error);
          }
        );
      });
    });
  };

  // Create the tables if they don't exist
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
      content TEXT,
      completed INTEGER DEFAULT 0,
      score INTEGER DEFAULT 0
    )`;

  const curriculumImagesTableQuery = `
      CREATE TABLE IF NOT EXISTS curriculumImages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        base64 TEXT NOT NULL
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

  const userSettingsTableQuery = `
    CREATE TABLE IF NOT EXISTS UserSettingsv3 (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      featureA INTEGER DEFAULT 1 CHECK(featureA BETWEEN 0 AND 1),
      featureB INTEGER DEFAULT 1 CHECK(featureB BETWEEN 0 AND 1),
      featureC INTEGER DEFAULT 1 CHECK(featureC BETWEEN 0 AND 1),
      featureD INTEGER DEFAULT 1 CHECK(featureD BETWEEN 0 AND 1),
      featureE INTEGER DEFAULT 1 CHECK(featureE BETWEEN 0 AND 1),
      featureF INTEGER DEFAULT 1 CHECK(featureF BETWEEN 0 AND 1),
      featureG INTEGER DEFAULT 1 CHECK(featureG BETWEEN 0 AND 1),
      featureH INTEGER DEFAULT 1 CHECK(featureH BETWEEN 0 AND 1),
      FOREIGN KEY (userId) REFERENCES users(id)
    )`;

  // Create the tables using the queries above and the createTable function
  return Promise.all([
    createTable(imgdpTableQuery, 'imgdp'),
    createTable(curriculumTableQuery, 'curriculum'),
    createTable(curriculumImagesTableQuery, 'curriculumImages'),
    createTable(usersTableQuery, 'users'),
    createTable(achievementsTableQuery, 'achievements'),
    createTable(userSettingsTableQuery, 'UserSettingsv3'),
  ])
  .then(() => {
    console.log('All tables created successfully.');
    return addColumnIfTableExists('curriculum', 'completed', 'completed INTEGER DEFAULT 0');
//    return addColumnIfTableExists('curriculum', 'score', 'score INTEGER DEFAULT 0');
  })
  .catch(error => {
    console.error('Error initializing database', error);
    throw error;
  });
};


function dropTrigger(triggerName) {
  db.transaction(tx => {
      tx.executeSql(
          `DROP TRIGGER IF EXISTS ${triggerName};`,
          [],
          () => {
              console.log(`Trigger '${triggerName}' dropped successfully.`);
          },
          error => {
              console.error(`Error dropping trigger '${triggerName}':`, error);
          }
      );
  });
}
// CRUD operations for the imgdp table
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

// CRUD operations for the curriculum table
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

// Retrieve all rows from the curriculum table for testing
const getAllCurriculumData = () => {
  return new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
              'SELECT * FROM curriculum',
              [],
              (_, result) => {
                  resolve(result.rows.raw());
              },
              (tx, error) => {
                  console.error('Error fetching all curriculum data:', error);
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

// CRUD operations for the users table
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
        `SELECT * FROM Users`,
        [],
        (_, result) => {
          const users = result.rows.raw();
          resolve(users);
        },
        (_, error) => { reject(error); }
      );
    });
  });
};

// Retrieve one row from the users table
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


//Create Settings Tablee in db
// const createSettingsTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS UserSettings (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         featureA NUMBER DEFAULT 1,
//         featureB NUMBER DEFUALT 1,
//         featureC NUMBER DEFUALT 1,
//         featureD NUMBER DEFAULT 1,
//         featureE NUMBER DEFAULT 1,
//         featureF NUMBER DEFAULT 1,
//         featureG NUMBER DEFAULT 1,
//         featureH NUMBER DEFAULT 1,

//       )`,
//       [],
//       () => {
//         console.log('Settings Table created successfully - in dbInitialization.');
//       },

//       (_, error) => {
//         console.error('Error creating table or exists', error);
//       },
//     );
//   });
// };

// Function to update user settings
const dropTable = (tableName) => {
  db.transaction(tx => {
    tx.executeSql(
      `DROP TABLE IF EXISTS ${tableName}`,
      [],
      (tx, results) => {
        console.log(`Table ${tableName} dropped successfully.`);
      },
      (tx, error) => {
        console.error(`Error dropping table ${tableName}:`, error);
      }
    );
  });
};

// Call the function with the table name you want to drop
// dropTable('UserSettings');

// is this chaning the true and false into 1 and zero

const updateUserSettings = (userId, settings) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE UserSettingsv3 SET
        featureA = ?,
        featureB = ?,
        featureC = ?,
        featureD = ?,
        featureE = ?,
        featureF = ?,
        featureG = ?,
        featureH = ?
        WHERE userId = ?`,
        [
          settings.featureA ? 1 : 0,
          settings.featureB ? 1 : 0,
          settings.featureC ? 1 : 0,
          settings.featureD ? 1 : 0,
          settings.featureE ? 1 : 0,
          settings.featureF ? 1 : 0,
          settings.featureG ? 1 : 0,
          settings.featureH ? 1 : 0,
          userId
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};


const updateUserSettings2 = (userId, settings) => {

  const booleanToInteger = value => (value === true ? 1 : 0);

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`
        INSERT INTO UserSettingsv3 (userId, featureA, featureB, featureC, featureD, featureE, featureF, featureG, featureH)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(userId) DO UPDATE SET
          featureA=excluded.featureA,
          featureB=excluded.featureB,
          featureC=excluded.featureC,
          featureD=excluded.featureD,
          featureE=excluded.featureE,
          featureF=excluded.featureF,
          featureG=excluded.featureG,
          featureH=excluded.featureH
      `, [
        userId,
        booleanToInteger(settings.featureA),
        booleanToInteger(settings.featureB),
        booleanToInteger(settings.featureC),
        booleanToInteger(settings.featureD),
        booleanToInteger(settings.featureE),
        booleanToInteger(settings.featureF),
        booleanToInteger(settings.featureG),
        booleanToInteger(settings.featureH)
      ], (tx, results) => {
        resolve(results);
      }, (tx, error) => {
        reject(error);
      });
    });
  });
};


// Function to retrieve user settings
const getUserSettings=(userId)=> {
  return new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
              `SELECT * FROM UserSettingsv3 WHERE userId = ?;`,
              [userId],
              (tx, results) => {
                  const rows = results.rows;
                  let userSettings = [];
                  for (let i = 0; i < rows.length; i++) {
                      userSettings.push(rows.item(i));
                  }
                  resolve(userSettings); // Resolve the promise with the user settings
              },
              error => {
                  reject(error); // Reject the promise with an error
              }
          );
      });
  });
}

const getAllUserSettings = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM UserSettingsv3`,
        [],
        (_, result) => { resolve(result.rows.raw()); },

        (_, error) => { reject(error); }
      );
    });
  });
};


  //  Combos table operations
  const createCombosTable = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS Combos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            score DECIMAL(12, 10),
            input TEXT,
            output TEXT
          )`,
          [],
          () => {
            console.log('Combos Table created successfully - in dbInitialization.');
            resolve();
          },
          (_, error) => {
            console.error('Error creating table:', error);
            reject(error);
          }
        );
      });
    });
  };

  const createScoreIndex = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE INDEX IF NOT EXISTS idx_score ON Combos(score)`,
          [],
          () => {
            console.log('Index created successfully.');
            resolve();
          },
          (_, error) => {
            console.error('Error creating index:', error);
            reject(error);
          }
        );
      });
    });
  };

  // CRUD operations for the Combos table
  // Insert a new row into the Combos table
  const insertComboData = (score, input, output) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Combos (score, input, output) VALUES (?, ?, ?)',
          [score, input, output],
          (_, result) => {
            console.log(`A row has been inserted with rowid ${result.insertId}`);
            resolve(result.insertId);
          },
          (_, error) => {
            console.error('Error inserting data:', error);
            reject(error);
          }
        );
      });
    });
  };

  // update a row in the Combos table
  const updateComboData = (score, id) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE Combos SET score = ? WHERE id = ?',
          [score, id],
          (_, result) => {
            console.log(`Row(s) updated: ${result.rowsAffected}`);
            resolve(result.rowsAffected);
          },
          (_, error) => {
            console.error('Error updating data:', error);
            reject(error);
          }
        );
      });
    });
  };

  // delete a row from the Combos table
  const deleteComboData = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Combos WHERE id = ?',
          [id],
          (_, result) => {
            console.log(`Row(s) deleted: ${result.rowsAffected}`);
            resolve(result.rowsAffected);
          },
          (_, error) => {
            console.error('Error deleting data:', error);
            reject(error);
          }
        );
      });
    });
  };

// A prediciton algorithm has been written in the prediction/sessionPrediction.js file
// that uses the data from the Combos table to predict the next best action.
// Access the table Combos and return combo that has score closest to 1
// const getBestComboData= () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT input, output, score FROM Combos ORDER BY ABS(score - 1) LIMIT 1',
//         [],
//         (_, result) => { resolve(result.rows.raw()); },
//         (tx, error) => { reject(error); },
//       );
//     });
//   });
// };

// CRUD operations for the achievements table
// Insert a new row into the achievements table
const insertAchievement = (name, description, points, user_id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO achievements (name, description, points, user_id) VALUES (?, ?, ?, ?)',
        [name, description, points, user_id],
        (_, result) => {
          console.log(`A row has been inserted with rowid ${result.insertId}`);
          resolve(result);
        },
        (_, error) => {
          console.error('Error inserting data', error);
          reject(error);
        },
      );
    });
  });
};

// update a row in the achievements table
const updateAchievement = (name, description, points, user_id) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE achievements SET name = ?, description = ?, points = ? WHERE user_id = ?',
      [name, description, points, user_id],
      (_, result) => { console.log(`Row(s) updated: ${result.rowsAffected}`); },
      (_, error) => { console.error('Error updating data', error); }
    );
  });
};

// Retrieve all rows from the achievements table
const allUserAchievements = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM achievements WHERE user_id = ?',
        [id],
        (_, result) => { resolve(result.rows.raw()); },
        (_, error) => { reject(error); }
      );
    });
  });
};

// delete a row from the achievements table
const deleteAchievement = (id) => {
  return new Promise((resolve, reject) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM achievements WHERE id = ?',
      [id],
      (_, result) => {
      console.log(`Row(s) deleted: ${result.rowsAffected}`);
      resolve(result);
      },
      (_, error) => {
        console.error('Error deleting data', error);
        reject(error);
       },
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
// USER TESTS
// console.log('Getting one user:');
// const oneUser = await getOneUser(3);
// console.log('One user:', oneUser);

// const allData = await getImageData();
// console.log('All data:', allData[0]);

// if (allData.length > 0) {
//   updateImageData('updated_base64_string', allData[0].id);
// }
//  const user1 = await getOneUser(1);
//   console.log('user1:', user1);
//   updateUser(1, { name:'Billy Bob' });
//   console.log('user1 after update:', user1);
//   const user2 = await getOneUser(2);
//   updateUser(2, { progressInCurriculum: 20, averageAccuracy: 20, necessaryBreakTime: 20 });
//   console.log('user2 after update:', user2);
  // other tests
  // delete a user test
  // const userToDelete = await getOneUser(3);
  // console.log('userToDelete:', userToDelete);
  // deleteUser(3);
  // console.log(getOneUser(3), "should be null");

  // INSERTING AN ACHIEVEMENT TO THE ACHIEVEMENTS TABLE TO DISPLAY
  // See logic in Achievements directory for displaying achievements.

  await insertAchievement('Streak', 'day streak', 4, 1);
  await insertAchievement('Hours', 'hours of learning', 20, 1);
  await insertAchievement('Tasks', 'tasks completed', 12, 1);
  console.log('All achievements:', await allUserAchievements(1));
console.log("finished running testDb");
};

// uncomment to run tests
testDb();

// Export functions
export {
  // createSettingsTable,
  dropTable,
  updateUserSettings,
  getUserSettings,
  getAllUserSettings,

  createCombosTable,
  createScoreIndex,
  insertComboData,
  updateComboData,
  deleteComboData,
  // getBestComboData,
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
  getAllCurriculumData,
  insertCurriculumData,
  dropTrigger,
  insertAchievement,
  updateAchievement,
  allUserAchievements,
  deleteAchievement,
  testDb,
};
