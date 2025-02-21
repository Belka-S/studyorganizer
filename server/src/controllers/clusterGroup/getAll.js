const { ClusterGroup } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const ownerId = req.user._id;
  const { page = 1, limit = 500, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;
  const total = await ClusterGroup.countDocuments({ ownerId, ...query });
  const groups = await ClusterGroup.find({ ownerId, ...query }, projection, { skip, limit })
    // .populate('ownerId', 'name email')
    .sort({ group: 1 });
  if (!groups) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} group(s)`, result: { groups } });
});

module.exports = getAll;
