// this file needs to run once on startup, then never again. dbRequests.cjs
// should be used after for all requests to the database

const sqlite3 = require('sqlite3').verbose();

// Open a database connection
let db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create a table
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER
)`, (err) => {
  if (err) {
    console.error('Error creating table', err.message);
  } else {
    console.log('Table created successfully.');
  }
});

// Insert data into the table
const insertUser = (name, age) => {
  db.run(`INSERT INTO users (name, age) VALUES (?, ?)`, [name, age], function (err) {
    if (err) {
      console.error('Error inserting data', err.message);
    } else {
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  });
};

// Query data from the table
const getUsers = () => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
      console.error('Error querying data', err.message);
    } else {
      rows.forEach((row) => {
        console.log(`${row.id}: ${row.name} - ${row.age}`);
      });
    }
  });
};


// Update data in the table
const updateUser = (id, age) => {
  db.run(`UPDATE users SET age = ? WHERE id = ?`, [age, id], function (err) {
    if (err) {
      console.error('Error updating data', err.message);
    } else {
      console.log(`Row(s) updated: ${this.changes}`);
    }
  });
};

// Delete data from the table
const deleteUser = (id) => {
  db.run(`DELETE FROM users WHERE id = ?`, id, function (err) {
    if (err) {
      console.error('Error deleting data', err.message);
    } else {
      console.log(`Row(s) deleted: ${this.changes}`);
    }
  });
};

// Export functions
module.exports = {
  insertUser,
  getUsers,
  updateUser,
  deleteUser
};

// Close the database connection
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
});
