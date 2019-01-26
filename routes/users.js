const express = require("express");
const router = express.Router();
const csrf = require("csurf");
const csrfProtection = csrf();
const handleUsers = require("./Actions/HandleUsers");
router.use(csrfProtection);
/* GET users listing. */
router.get("/login", function(req, res, next) {
  res.render("login", { csrfToken: req.csrfToken() });
});
router.post("/login", (req, res, next) => {
  res.redirect("/");
});
router.post("/register", function(req, res, next) {
  console.log("got one");
  res.redirect("/");
});
router.post("/:userName", function(req, res, next) {
  let game = req.body.addGame;
  let user = req.params.userName;
  let addToList = handleUsers(user, game);
  console.log(addToList);
  res.json(addToList);
});

module.exports = router;
