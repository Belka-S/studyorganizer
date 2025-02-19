const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const length = lgth => [lgth, `Must be at least ${lgth} characters long!`];
const regex = field => [regExp[field].pattern, `Invalid ${field.toLowerCase()}!`];

// const roleList = ['admin', 'user'];
const engineList = ['google', 'deepl'];

const userSchema = new Schema(
  {
    name: { type: String, minlength: length(4), required },
    email: { type: String, unique: true, match: regex(regExp.EMAIL.name), required },
    password: { type: String, minlength: length(6), required },
    verifiedEmail: { type: Boolean, default: false, required },
    verificationCode: { type: String, default: null },
    // role: { type: String, enum: roleList, default: 'user' },
    avatarUrl: { type: String, default: '' },
    avatarId: { type: String, default: null },
    // whatsApp: { type: String, default: '' },
    // telegram: { type: String, default: '' },
    // location: { type: String, default: '' },
    // socialLink: { type: String, default: '' },
    // birthday: { type: String, default: '' },
    // about: { type: String, default: '' },
    lang: { type: String, default: 'en' },
    rate: { type: String, default: 0.6 },
    engine: { type: String, enum: engineList, default: 'google' },
    subject: { type: String, default: null },
    subjectId: { type: Schema.Types.ObjectId, ref: 'ClusterSubject', default: null },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
userSchema.post('save', mongooseError);

const User = model('User', userSchema);

module.exports = { User };
