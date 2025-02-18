const { HttpError } = require('../../utils');

const { ClusterSubject } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const subject = await ClusterSubject.findById(id);
  if (!subject) throw HttpError(403);

  res.status(200).json({ message: 'Found', result: { subject } });
});

module.exports = getById;
