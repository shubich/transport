import UserService from '../../services/user';

export function me(req, res) {
  const token = req.header('Authorization');
  const uid = token ? UserService.decodeToken(token).uid : null;

  UserService.getUserByid(uid)
    .then(user => res.status(200).send(user))
    .catch(() => res.status(500), 'Server error');
}

