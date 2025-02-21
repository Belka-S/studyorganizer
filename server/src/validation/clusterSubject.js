const Joi = require('joi');

const { validateBody } = require('../decorators');
const { regExp } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    subject: Joi.string().pattern(regExp.NAME.pattern).required(),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    subject: Joi.string().pattern(regExp.NAME.pattern),
    clusterSelect: Joi.array(),
    gdriveSelect: Joi.array(),
    activeClusterId: Joi.string().allow(null),
  }),
);

module.exports = { addSchema, updateSchema };
