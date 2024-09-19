const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const regex = field => [regExp[field].pattern, `Invalid ${field.toLowerCase()}!`];

const elementGroupSchema = new Schema(
  {
    elementGroup: { type: String, match: regex(regExp.NAME.name), required },

    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
elementGroupSchema.post('save', mongooseError);

const ElementGroup = model('ElementGroup', elementGroupSchema);

module.exports = { ElementGroup };
