import UserService from '../../services/user';

export function signin(req, res) {
  const { loginName, password } = req.body;

  UserService.signin(loginName, password)
    .then((user) => {
      if (!user) {
        res.status(403).send({ auth: false, message: 'User is not found' });
      } else {
        UserService.saveToken(res, user);
        res.status(200).send({ auth: true, message: 'Login successful' });
      }
    })
    .catch(() => res.status(403).send({ auth: false, message: 'Login error' }));
}

export function signup(req, res) {
  const { cardNumber, loginName, password } = req.body;

  UserService.signup(cardNumber, loginName, password)
    .then((user) => {
      if (!user) {
        res.status(403).send({ auth: false, message: 'Registration error' });
      } else {
        UserService.saveToken(res, user);
        res.status(200).send({ auth: true, message: 'Successful registration' });
      }
    })
    .catch(() => res.status(403).send({ auth: false, message: 'Registration error' }));
}
