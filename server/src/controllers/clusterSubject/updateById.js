const { HttpError, filterValues } = require('../../utils');

const { ClusterSubject } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  // if (restrictedAccess.ClusterSubjectId.includes(id)) throw HttpError(403);

  const newSubject = await ClusterSubject.findByIdAndUpdate(id, req.body, { new: true });
  if (!newSubject) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { subject: filterValues(newSubject) } });
});

module.exports = updateById;
