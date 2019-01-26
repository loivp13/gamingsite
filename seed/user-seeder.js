const User = require("../models/user");
const mongoose = require("mongoose");
const mongoDB =
  "mongodb://masterveloute:Heyheyhey3@ds023684.mlab.com:23684/game_app";
mongoose.connect(mongoDB);

let users = [
  new User({
    username: "masterveloute",
    password: "1234",
    email: "loivp@yahoo.com"
  })
];
users[0].save((err, result) => {
  try {
    console.log("seed 1");
  } catch (err) {
    console.log(err);
  }
});
