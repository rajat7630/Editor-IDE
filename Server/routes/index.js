var express = require("express");
var router = express.Router();
var passport = require("passport");
const redis = require('redis');

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

/* GET Google Authentication API. */
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/", session: false }),
	function(req, res) {
		var token = req.user.token;
		res.redirect("http://localhost:5555/admin?token=" + token);
	}
);

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('http://localhost:5555');
  });

module.exports = router;