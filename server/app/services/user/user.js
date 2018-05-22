import jwt from 'jsonwebtoken';
import SECRET from './pem';
import UserSchema from './userSchema';

export default class User {
  static signup(cardNumber, loginName, password) {
    const user = new UserSchema({
      cardNumber,
      loginName,
      password,
    });

    return user.save()
      .then(() => user)
      .catch(() => null);
  }

  static signin(loginName, password) {
    return this.getUserByLoginName(loginName)
      .then((user) => {
        if (!user) return null;

        return user.comparePassword(password)
          .then(isMatch => (isMatch ? user : null))
          .catch(() => null);
      })
      .catch(() => null);
  }

  static getAllUsers() {
    const query = UserSchema.find();
    query.select('_id cardNumber loginName role active bill');

    return query;
  }

  static getUserByid(id) {
    return UserSchema.findOne({ _id: id })
      .then(user => (user || null))
      .catch(() => null);
  }

  static getUserByLoginName(loginName) {
    return UserSchema.findOne({ loginName });
  }

  static getUserByCardNumber(cardNumber) {
    return UserSchema.findOne({ cardNumber });
  }

  static async putMoney(uid, sum) {
    const user = await this.getUserByid(uid);
    const newBill = user.bill + sum;

    return UserSchema.findByIdAndUpdate(uid, { bill: newBill });
  }

  static authentication(token) {
    const uid = token ? this.decodeToken(token).uid : null;

    return this.getUserByid(uid)
      .then((user) => {
        if (!user) return null;
        return (this.isJwtTokenExpired(token) ? user : null);
      })
      .catch(() => null);
  }

  static saveToken(res, user) {
    res.set('Access-Control-Expose-Headers', 'Authorization, Set-Cookie');
    res.set('Authorization', `${this.jwtSign(user)}`);
  }

  static jwtSign(user) {
    return jwt.sign({
      uid: user._id,
      cardNumber: user.cardNumber,
    }, SECRET, { expiresIn: '21d' });
  }

  static isJwtTokenExpired(token) {
    return jwt.verify(token, SECRET);
  }

  static decodeToken(token) {
    return jwt.decode(token);
  }
}
