const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const favicon = require("serve-favicon");
const validator = require("express-validator");
const mongoose = require("mongoose");
const session = require("express-session");
// const webpack = require("webpack");
// const webpackConfig = require("./config/webpack.dev");
// const compiler = webpack(webpackConfig);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const searchRouter = require("./routes/searchFunction");

const app = express();
//connect to mongodb
const mongoDB =
  "mongodb://masterveloute:Heyheyhey3@ds023684.mlab.com:23684/game_app";
mongoose.connect(mongoDB);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("view cache", false);

//use favicon
app.use(
  favicon(path.join(__dirname, "public", "images", "favicon", "favicon.ico"))
);
// use webpack-middleware
// use webpack-hot-reloader
// app.use(
//   require("webpack-dev-middleware")(compiler, {
//     noInfo: true,
//     public: webpackConfig.output.publicPath
//   })
// );
// app.use(require("webpack-hot-middleware")(compiler));
app.use(
  session({
    sessionId: req => {
      return "4873647364723"; // use UUIDs for session IDs
    },
    secret: "dhfpaiojdhfopshdapfsapfoidnfopsangspd",
    resave: false,
    saveUninitialized: true
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/searchGame", searchRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
