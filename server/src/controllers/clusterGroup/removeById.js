const { HttpError } = require('../../utils');

const { ClusterGroup } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const removeById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const delGroup = await ClusterGroup.findByIdAndDelete(id);
  if (!delGroup) throw HttpError(403);

  res.status(200).json({ message: 'Deleted', result: { group: delGroup } });
});

module.exports = removeById;
