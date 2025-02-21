const { Cluster } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: ownerId } = req.user;
  const { cluster } = req.body;

  const clusterArr = await Cluster.find({ cluster, ownerId });
  if (clusterArr[0]) {
    throw HttpError(409, 'Already existing cluster');
  }

  const newCluster = await Cluster.create({ ...req.body, ownerId });
  if (!newCluster) throw HttpError(403);

  res
    .status(201)
    .json({ message: 'Cluster created', result: { cluster: filterValues(newCluster) } });
});

module.exports = add;
