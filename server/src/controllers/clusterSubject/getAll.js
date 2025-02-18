const { ClusterSubject } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 500, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;
  const total = await ClusterSubject.countDocuments({ owner, ...query });
  const subjects = await ClusterSubject.find({ owner, ...query }, projection, { skip, limit })
    // .populate('owner', 'name email')
    .sort({ clusterSubject: 1 });
  if (!subjects) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} subject(s)`, result: { subjects } });
});

module.exports = getAll;
