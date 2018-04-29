import UserSchema from './userSchema';

export default class User {
  static signup(cardNumber, password, location) {
    const user = new UserSchema({
      cardNumber,
      password,
      location,
    });

    return user.save()
      .then(() => user)
      .catch(() => null);
  }

  static signin(cardNumber, password) {
    return this.getUserByCardNumber(cardNumber)
      .then((user) => {
        if (!user) return null;

        return user.comparePassword(password)
          .then(isMatch => (isMatch ? user : null))
          .catch(() => null);
      })
      .catch(() => null);
  }

  static getUserByid(id) {
    return UserSchema.findOne({ _id: id })
      .then(user => (user || null))
      .catch(() => null);
  }

  static getUserByCardNumber(cardNumber) {
    return UserSchema.findOne({ cardNumber });
  }
}
