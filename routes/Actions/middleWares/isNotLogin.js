module.exports = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/profile");
};