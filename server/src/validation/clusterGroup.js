const Joi = require('joi');

const { validateBody } = require('../decorators');
const { regExp } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    group: Joi.string().pattern(regExp.NAME.pattern).required(),
    subject: Joi.string().required(),
  }),
);

module.exports = { addSchema };
