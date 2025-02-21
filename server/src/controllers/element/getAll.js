const { Element } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const ownerId = req.user._id;
  const { page = 1, limit = 1000000, ...query } = req.query;
  const projection = '-updatedAt';
  const options = {
    limit,
    skip: (page - 1) * limit,
    enableUtf8Validation: false,
  };
  const total = await Element.countDocuments({ ownerId, ...query });
  const elements = await Element.find({ ownerId, ...query }, projection, options)
    // .populate('ownerId', 'name email')
    .sort({ createdAt: 1 });
  if (!elements) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} element(s)`, result: { elements } });
});

module.exports = getAll;
