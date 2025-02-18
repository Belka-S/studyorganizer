const Joi = require('joi');

const { validateBody } = require('../decorators');
const { regExp } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    clusterSubject: Joi.string().pattern(regExp.NAME.pattern).required(),
  }),
);

module.exports = { addSchema };
