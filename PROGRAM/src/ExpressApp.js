// Used libraries
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const sqlite = require('sqlite3').verbose();

// Express Application
var ExpressApp = express();
ExpressApp.use(bodyParser.urlencoded({
    extended: true,
}));
ExpressApp.use(bodyParser.json())

// Database configuration 
const db_name = path.join(__dirname, "database.db");
const db = new sqlite.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database.");
});

// Starting the server
ExpressApp.listen(8000, () => console.log(`Express server listening on port 8000`));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Experiments
// GET /experiments
ExpressApp.get("/experiments", (req, res) => {
  const sql = "SELECT * FROM EXPERIMENT";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(rows);
  });
});

// UPDATE /experiments
ExpressApp.put("/experiments", (req, res) => {
  const id = req.body.id;
  const experiment = [req.body.Name, req.body.Date, req.body.Gens, req.body.Description, id];
  const sql = "UPDATE EXPERIMENT SET Experiment_Name = ?, Experiment_Date = ?, Experiment_Gens = ?, Experiment_Description = ? WHERE (Experiment_ID = ?)";
  db.run(sql, experiment, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1");
  });
});

// INSERT /experiments
ExpressApp.post("/experiments", (req, res) => {
  const sql = "INSERT INTO EXPERIMENT (Experiment_Name, Experiment_Date, Experiment_Gens, Experiment_Description) VALUES (?, ?, ?, ?)";
  const experiment = [req.body.Name, req.body.Date, req.body.Gens, req.body.Description];
  db.run(sql, experiment, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1");
  });
});

// DELETE /experiments
ExpressApp.delete("/experiments", (req, res) => {
  const sql = "DELETE FROM EXPERIMENT WHERE Experiment_ID = ?";
  const experiment = [req.body.id];
  db.run(sql, experiment, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1")
  });
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Generators
// GET /generators
ExpressApp.get("/generators", (req, res) => {
  const sql = "SELECT * FROM GENERATOR";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(rows);
  });
});

// UPDATE /generators
ExpressApp.put("/generators", (req, res) => {
  const id = req.body.id;
  const generator = [req.body.Name, req.body.LvL_AR, req.body.Phi_1, req.body.Phi_2, req.body.Phi_3, req.body.Y_01, req.body.Y_02, req.body.Y_03, req.body.LvL_MA, req.body.Teta_1, req.body.Teta_2, req.body.Y_00, req.body.M, req.body.D, req.body.A, req.body.B, req.body.C, req.body.Y_Stac, req.body.St, req.body.SKO, id];
  const sql = "UPDATE GENERATOR SET Generator_Name = ?, Generator_LvL_AR = ?, Generator_Phi_1 = ?, Generator_Phi_2 = ?, Generator_Phi_3 = ?, Generator_Y_01 = ?, Generator_Y_02 = ?, Generator_Y_03 = ?, Generator_LvL_MA = ?, Generator_Teta_1 = ?, Generator_Teta_2 = ?, Generator_Y_00 = ?, Generator_M = ?, Generator_D = ?, Generator_A = ?, Generator_B = ?, Generator_C = ?, Generator_Y_Stac = ?, Generator_St = ?, Generator_SKO = ? WHERE (Generator_ID = ?)";
  db.run(sql, generator, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1");
  });
});

// INSERT /generators
ExpressApp.post("/generators", (req, res) => {
  const sql = "INSERT INTO GENERATOR (Generator_Name, Generator_LvL_AR, Generator_Phi_1, Generator_Phi_2, Generator_Phi_3, Generator_Y_01, Generator_Y_02, Generator_Y_03, Generator_LvL_MA, Generator_Teta_1, Generator_Teta_2, Generator_Y_00, Generator_M, Generator_D, Generator_A, Generator_B, Generator_C, Generator_Y_Stac, Generator_St, Generator_SKO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const generator = [req.body.Name, req.body.LvL_AR, req.body.Phi_1, req.body.Phi_2, req.body.Phi_3, req.body.Y_01, req.body.Y_02, req.body.Y_03, req.body.LvL_MA, req.body.Teta_1, req.body.Teta_2, req.body.Y_00, req.body.M, req.body.D, req.body.A, req.body.B, req.body.C, req.body.Y_Stac, req.body.St, req.body.SKO];
  db.run(sql, generator, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1")
  });
});

// DELETE /generators
ExpressApp.delete("/generators", (req, res) => {
  const sql = "DELETE FROM GENERATOR WHERE Generator_ID = ?";
  const generator = [req.body.id];
  db.run(sql, generator, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1")
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Parameters
// GET /parameters
ExpressApp.get("/parameters", (req, res) => {
  const sql = "SELECT * FROM PARAMETERS";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(rows);
  });
});

// UPDATE /parameters
ExpressApp.put("/parameters", (req, res) => {
  const id = req.body.id;
  const parameters = [req.body.File, req.body.MainGen, req.body.Y_Out, req.body.experiments, req.body.generators, req.body.Parameters_Tacts, id];
  const sql = "UPDATE PARAMETERS SET Parameters_File = ?, Parameters_MainGen = ?, Parameters_Y_Out = ?, experiments = ?, generators = ?, Parameters_Tacts = ? WHERE (Parameters_ID = ?)";
  db.run(sql, parameters, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1");
  });
});

// INSERT /parameters
ExpressApp.post("/parameters", (req, res) => {
  const sql = "INSERT INTO PARAMETERS (Parameters_File, Parameters_MainGen, Parameters_Y_Out, experiments, generators, Parameters_Tacts) VALUES (?, ?, ?, ?, ?, ?)";
  const parameters = [req.body.File, req.body.MainGen, req.body.Y_Out, req.body.experiments, req.body.generators, req.body.Parameters_Tacts];
  db.run(sql, parameters, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1")
  });
});

// DELETE /parameters
ExpressApp.delete("/parameters", (req, res) => {
  const sql = "DELETE FROM PARAMETERS WHERE Parameters_ID = ?";
  const parameters = [req.body.id];
  db.run(sql, parameters, err => {
    if (err) {
      return console.error(err.message);
    }
    res.send("1")
  });
});

// ----------------------------------------------------------------------------------------------------------
module.exports = ExpressApp;