import UserService from '../../services/user';

export function me(req, res) {
  const token = req.header('Authorization');
  const uid = token ? UserService.decodeToken(token).uid : null;

  UserService.getUserByid(uid)
    .then(user => res.status(200).send(user))
    .catch(() => res.status(500), 'Server error');
}

export function getAllUsers(req, res) {
  UserService.getAllUsers()
    .then((data) => {
      if (!data) {
        res.status(403).send('Nothing here yet');
      } else {
        res.status(200).send(data);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}
