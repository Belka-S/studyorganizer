const Joi = require('joi');

const { validateBody } = require('../decorators');
const { langCodes } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    element: Joi.string().required(),
    caption: Joi.string(),
    cluster: Joi.string().required(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    element: Joi.string(),
    caption: Joi.string().allow(''),
    cluster: Joi.string(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
    lang: Joi.string().valid(...Object.keys(langCodes)),
  }),
);

module.exports = { addSchema, updateSchema };
