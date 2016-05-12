var express = require('express');
var router = express.Router();
var knex = require('../db')

router.post('/signup', function(req, res, next) {
  const errors = []

  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.name || !req.body.name.trim()) errors.push("Name can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users')
      .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
      .count() // [{count: "0"}]
      .first() // {count: "0"}
      .then(function (result) {
         // {count: "0"}
         if (result.count === "0") {

         } else {
          res.status(422).json({
            errors: ["Email has already been taken"]
          })
        }
      })
  }
  // require knex
  // check email, name, and password are all there
  //  if not, return an error
  // check to see if the email already exists in the db
  //  if so, return an error
  // if we're OK
  //  hash password
  //  knex insert stuff from req.body
  //  create a token
  //  send back id, email, name, token
});

module.exports = router;
