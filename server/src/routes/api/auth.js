const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate, passport } = require('../../middlewares');

const router = express.Router();

// Auth
router.post('/register', validate.user.registerSchema, ctrl.auth.register);
router.post('/login', validate.user.loginSchema, ctrl.auth.login);
router.post('/logout', authenticate, ctrl.auth.logout);

// Refresh token
router.post('/refresh', ctrl.auth.refreshToken);

// Verify email
router.post('/verify', validate.user.verifySchema, ctrl.auth.verifyEmail);

// Reset pass
router.post('/forgot', validate.user.forgotSchema, ctrl.auth.forgotPass);
router.post('/reset', validate.user.resetSchema, ctrl.auth.resetPass);

// Google auth
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/cb', passport.authenticate('google', { session: false }), ctrl.auth.google);

module.exports = router;
