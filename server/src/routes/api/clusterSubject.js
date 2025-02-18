const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrl.clusterSubject.getAll);
router.get('/:id', isValidId, ctrl.clusterSubject.getById);
router.post('/', validate.clusterSubject.addSchema, ctrl.clusterSubject.add);
router.put('/:id', isValidId, validate.clusterSubject.addSchema, ctrl.clusterSubject.updateById);
router.delete('/:id', isValidId, ctrl.clusterSubject.removeById);

module.exports = router;
