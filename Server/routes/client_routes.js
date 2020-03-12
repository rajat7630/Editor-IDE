const express = require('express');
const router = express.Router();
const passportClient = require('passport');
const authenticateClient = require('./client_login.js');
router.get(
  '/',
  passportClient.authenticate('google-alt', { scope: ['profile', 'email'] }),
  (req, res) => {
    console.log('reached');
  }
);

router.get(
  '/auth/google/callback',
  passportClient.authenticate('google-alt', {
    failureRedirect: '/',
    session: false
  }),
  (req, res) => {
    res.redirect('http://localhost:5000/test/7437');
  }
);

module.exports = router;
