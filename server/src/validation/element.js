const Joi = require('joi');

const { validateBody } = require('../decorators');
const { langCodes } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    element: Joi.string().required(),
    caption: Joi.string(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
    clusterId: Joi.string().required(),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    element: Joi.string(),
    caption: Joi.string().allow(''),
    lang: Joi.string().valid(...Object.keys(langCodes)),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
    clusterId: Joi.string(),
  }),
);

module.exports = { addSchema, updateSchema };
