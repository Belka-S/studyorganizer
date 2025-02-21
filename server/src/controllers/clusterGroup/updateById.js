const { HttpError, filterValues } = require('../../utils');

const { ClusterGroup } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const newGroup = await ClusterGroup.findByIdAndUpdate(id, req.body, { new: true });
  if (!newGroup) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { group: filterValues(newGroup) } });
});

module.exports = updateById;
