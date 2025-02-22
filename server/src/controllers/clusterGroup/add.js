const { ClusterGroup } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: ownerId } = req.user;
  const { subjectId } = req.body;

  const clusterGroupArr = await ClusterGroup.find({ ...req.body, ownerId, subjectId });
  if (clusterGroupArr[0]) {
    throw HttpError(409, 'Already existing group');
  }

  const newClusterGroup = await ClusterGroup.create({ ...req.body, ownerId });
  if (!newClusterGroup) throw HttpError(403);

  res
    .status(201)
    .json({ message: 'Group created', result: { group: filterValues(newClusterGroup) } });
});

module.exports = add;
