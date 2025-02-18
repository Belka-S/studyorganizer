const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/current', ctrl.user.getProfile);

router.patch(
  '/update',
  upload.single('avatar'),
  validate.user.updateSchema,
  ctrl.user.updateProfile,
);
router.delete('/delete', ctrl.user.deleteProfile);

module.exports = router;
