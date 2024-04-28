const express = require("express");
var cors = require("cors");

const {
  createClient,
  readClients,
  updateClient,
  deleteClient,
  deleteClients,
} = require("./crud");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/clients", (req, res) => {
  readClients((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.post("/clients", (req, res) => {
  const { name, dob, primary_language, secondary_language, funding } = req.body;
  createClient(
    name,
    dob,
    primary_language,
    secondary_language,
    funding,
    (err, data) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(201).send(`Item is added with ID: ${data.id}`);
      }
    }
  );
});

app.put("/clients/:id", (req, res) => {
  const { name, dob, primary_language, secondary_language, funding } = req.body;

  updateClient(
    req.params.id,
    name,
    dob,
    primary_language,
    secondary_language,
    funding,
    (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send("Updated client");
      }
    }
  );
});

app.post("/clients/delete", (req, res) => {
  const { ids } = req.body;
  deleteClients(ids, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(`Items Deleted.`);
    }
  });
});

app.delete("/clients/:id", (req, res) => {
  deleteClient(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send("Deleted");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
