const sqlite3 = require("sqlite3").verbose();
const dbName = "clients_db.db";

let db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to the DB.");
    db.run(
      "CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, dob TEXT, primary_language TEXT, secondary_language TEXT, funding TEXT)",
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Table created or existing");
        }
      }
    );
  }
});

module.exports = db;
