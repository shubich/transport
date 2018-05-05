import bcrypt from 'bcrypt';
import mongoose from '../../mongo';

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  bill: {
    type: Number,
    default: 0,
  },
});

/* eslint-disable */
UserSchema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
    .then(isMatch => isMatch)
    .catch(() => false);
};

export default mongoose.model('User', UserSchema);
