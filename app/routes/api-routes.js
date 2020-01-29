// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/champions", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.champions.findAll({}).then(function(results){
      res.json(results);
    })
  });

  //Get route for synergy
  app.get("/api/champions/:synergy", function(req, res) {
    db.Media.findAll({
      where:{
        category:req.params.synergy
      }
    }).then(function(results){
      res.json(results);
    })
  });
  
  //POST ROUTE FOR USERS
  app.post("/api/champions", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.champions.create({
      image: req.body.image,
      name: req.body.name,
      synergy1: req.body.synergy1,
      synergy2: req.body.synergy2,
      synergy3: req.body.synergy3,
      cost: req.body.cost,
      ult: req.body.ult
      
    }).then(function(results){
      console.log(results);
      res.json(results);
    })
    .catch(function(err) {
      // print the error details
      console.log(err.message);
    });
  });



};
