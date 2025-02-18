const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.clusterGroup.getAll);
router.get('/:id', isValidId, ctrl.clusterGroup.getById);
router.post('/', validate.clusterGroup.addSchema, ctrl.clusterGroup.add);
router.put('/:id', isValidId, validate.clusterGroup.addSchema, ctrl.clusterGroup.updateById);
router.delete('/:id', isValidId, ctrl.clusterGroup.removeById);

module.exports = router;
