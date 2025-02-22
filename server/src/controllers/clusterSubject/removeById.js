const { HttpError } = require('../../utils');

const { ClusterSubject } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const removeById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const delSubject = await ClusterSubject.findByIdAndDelete(id);
  if (!delSubject) throw HttpError(403);

  res.status(200).json({ message: 'Deleted', result: { subject: delSubject } });
});

module.exports = removeById;
