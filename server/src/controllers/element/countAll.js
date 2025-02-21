const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const countAll = ctrlWrapper(async (req, res) => {
  const ownerId = req.user._id;
  const { page, limit, ...query } = req.query;

  const total = await Element.countDocuments({ ownerId, ...query });

  res.status(200).json({ result: { total } });
});

module.exports = countAll;
