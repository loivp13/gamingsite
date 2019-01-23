var express = require("express");
var router = express.Router();
const handleUsers = require("./Actions/HandleUsers");

/* GET users listing. */
router.post("/:userName", function(req, res, next) {
  let game = req.body.addGame;
  let user = req.params.userName;
  let addToList = handleUsers(user, game);

  res.json(addToList);
});

module.exports = router;
