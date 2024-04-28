const db = require("./database");

// POST
const createClient = (
  name,
  dob,
  primary_language,
  secondary_language,
  funding,
  callback
) => {
  const sql = `INSERT INTO clients (name, dob, primary_language, secondary_language, funding) VALUES (?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [name, dob, primary_language, secondary_language, funding],
    function (err) {
      callback(err, { id: this.lastID });
    }
  );
};

// POST - deletes multiple rows at once, array sent in POST body.
const deleteClients = (ids, callback) => {
  const sql = `DELETE FROM clients WHERE id IN (${ids
    .map(() => "?")
    .join(",")})`;
  db.run(sql, ids, callback);
};

// GET
const readClients = (callback) => {
  const sql = `SELECT * FROM clients`;
  db.all(sql, [], callback);
};

// PUT
const updateClient = (
  id,
  name,
  dob,
  primary_language,
  secondary_language,
  funding,
  callback
) => {
  const sql = `UPDATE clients SET name = ?, dob = ?, primary_language = ?, secondary_language = ?, funding = ? WHERE id = ?`;

  db.run(
    sql,
    [name, dob, primary_language, secondary_language, funding, id],
    callback
  );
};

// DELETE
const deleteClient = (id, callback) => {
  const sql = `DELETE FROM clients WHERE id = ?`;
  db.run(sql, id, callback);
};

module.exports = {
  createClient,
  readClients,
  updateClient,
  deleteClient,
  deleteClients,
};
