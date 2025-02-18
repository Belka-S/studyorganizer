const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const userRouter = require('./api/user');
const clusterRouter = require('./api/cluster');
const clusterGropeRouter = require('./api/clusterGroup');
const clusterSubjectRouter = require('./api/clusterSubject');
const elementRouter = require('./api/element');
const pingRouter = require('./api/ping');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/clusters', clusterRouter);
router.use('/clustergroups', clusterGropeRouter);
router.use('/clustersubjects', clusterSubjectRouter);
router.use('/elements', elementRouter);
// Prevent onrender.com from sleep (with https://console.cron-job.org)
router.use('/ping', pingRouter);

module.exports = router;
