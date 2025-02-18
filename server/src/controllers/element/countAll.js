const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const countAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page, limit, ...query } = req.query;

  const total = await Element.countDocuments({ owner, ...query });

  res.status(200).json({ result: { total } });
});

module.exports = countAll;
