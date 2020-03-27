var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID:
        '97647585806-m8rk8ctonrqtoeojvk9chs531ecmqomu.apps.googleusercontent.com',
      clientSecret: 'GyhQz03Fmomzs07LknBA7asI',
      callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      var userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
      };
      done(null, userData);
    }
  )
);
