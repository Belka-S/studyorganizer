const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.element.getAll);
router.get('/:id', isValidId, ctrl.element.getById);
router.post('/', validate.element.addSchema, ctrl.element.add);
router.patch('/:id', isValidId, validate.element.updateSchema, ctrl.element.updateById);
router.delete('/:id', isValidId, ctrl.element.removeById);

module.exports = router;
