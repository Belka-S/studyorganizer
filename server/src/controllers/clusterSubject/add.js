const { ClusterSubject } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: ownerId } = req.user;

  const clusterSubjectArr = await ClusterSubject.find({ ...req.body, ownerId });
  if (clusterSubjectArr[0]) {
    throw HttpError(409, 'Already existing subject');
  }

  const newClusterSubject = await ClusterSubject.create({ ...req.body, ownerId });
  if (!newClusterSubject) throw HttpError(403);

  res
    .status(201)
    .json({ message: 'Subject created', result: { subject: filterValues(newClusterSubject) } });
});

module.exports = add;
