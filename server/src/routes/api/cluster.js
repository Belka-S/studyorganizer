const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.cluster.getAll);
router.get('/:id', isValidId, ctrl.cluster.getById);
router.post('/', validate.cluster.addSchema, ctrl.cluster.add);
router.patch('/:id', isValidId, validate.cluster.updateSchema, ctrl.cluster.updateById);
router.delete('/:id', isValidId, ctrl.cluster.removeById);

module.exports = router;
