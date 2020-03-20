const passportClient = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
passportClient.serializeUser((user, done) => {
  done(null, user);
});
passportClient.deserializeUser((user, done) => {
  done(null, user);
});
passportClient.use(
  'google-alt',
  new googleStrategy(
    {
      clientID:
        '291702553414-aamkmsh4ipaosq5f29av0ikrpcd1gc9e.apps.googleusercontent.com',
      clientSecret: '6FOFZ3J7XLQaXd4Xe_88Oqrv',
      callbackURL: 'http://localhost:3000/test/auth/google/callback'
    },
    function(token, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);
