const { HttpError, filterValues } = require('../../utils');

const { Cluster } = require('../../models');
const { ClusterGroup } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateById = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { id } = req.params;

  // find Group
  const { group } = !req.body && (await Cluster.findById(id));
  const clusterCount = !req.body && (await Cluster.countDocuments({ owner, group }));

  // Cluster
  const newCluster = await Cluster.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!newCluster) throw HttpError(403);

  // delete Group
  if (clusterCount === 1 && !req.body) {
    const delGroup = await ClusterGroup.findOneAndDelete({ owner, clusterGroup: group });
    if (!delGroup) throw HttpError(403, 'Failed to delete group');
  }

  res.status(200).json({
    message: !req.body ? `Deleted ${clusterCount} group(s)` : 'Updated',
    result: { cluster: filterValues(newCluster) },
  });
});

module.exports = updateById;
