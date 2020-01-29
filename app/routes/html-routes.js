// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  

  //To Homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //To loginpage
  app.get("/champions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/champions.html"));
  });

  //To registration page
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });
  
  //To user interface to add movies
  app.get("/items", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/items.html"));
    console.log(req.body.first_name);
    });

  
    


};

