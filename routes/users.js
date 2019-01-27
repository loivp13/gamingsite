const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf();
const handleUsers = require("./Actions/HandleUsers");
const passport = require("passport");

router.use(csrfProtection);

/* Account login page */
router.get("/login", function(req, res, next) {
  let messages = req.flash("error");
  res.render("login", {
    csrfToken: req.csrfToken()
  });
});

// User attempt to login
router.post("/login", function(req, res, next) {
  res.redirect("/");
});

//User attempt to register
router.post(
  "/register",
  passport.authenticate("local.signup", {
    successRedirect: "/",
    failureRedirect: "/users/login"
  })
);

//User adding to wish list
router.post("/:userName", function(req, res, next) {
  let game = req.body.addGame;
  let user = req.params.userName;
  let addToList = handleUsers(user, game);
  console.log(addToList);
  res.json(addToList);
});

module.exports = router;
