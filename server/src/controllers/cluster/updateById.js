const { HttpError, filterValues } = require('../../utils');

const { Cluster } = require('../../models');
const { ClusterGroup } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateById = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { id } = req.params;

  const toDelete = Boolean(!req.body || req.body.groupId);

  // find Group
  const { groupId } = toDelete && (await Cluster.findById(id));
  const clusterCount = toDelete && (await Cluster.countDocuments({ owner, groupId }));

  // Cluster
  const newCluster = await Cluster.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!newCluster) throw HttpError(403);

  // delete Group
  if (toDelete && clusterCount === 1) {
    const delGroup = await ClusterGroup.findOneAndDelete({ owner, _id: groupId });
    if (!delGroup) throw HttpError(403, 'Failed to delete group');
  }

  res.status(200).json({
    message: toDelete && clusterCount === 1 ? `Deleted ${clusterCount} group(s)` : 'Updated',
    result: { cluster: filterValues(newCluster) },
  });
});

module.exports = updateById;
