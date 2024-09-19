const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const gravatar = require('gravatar');
const { User } = require('../../models');
const { HttpError, randomNumber, sendMail, createMsg } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

// const { TOKEN_REFRESH_SECRET } = process.env;

const register = ctrlWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  if (await User.findOne({ name })) {
    throw HttpError(409, 'Name already exists');
  }
  if (await User.findOne({ email })) {
    throw HttpError(409, 'Email already exists');
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationCode = randomNumber(6).toString();
  const msg = createMsg('verifyEmail.ejs', { email, verificationCode });
  await sendMail.nodemailer(msg);

  const user = await User.create({
    ...req.body,
    password: hashPassword,
    verificationCode, // avatarUrl: gravatar.url(email),
  });
  if (!user) throw HttpError(403, 'Failed to sign up');

  res.status(201).json({
    message: `Verification code sent to ${user.email}`,
    result: { user: { ...user._doc, verificationCode: verificationCode?.split(' ')[1] } },
  });
});

module.exports = register;
