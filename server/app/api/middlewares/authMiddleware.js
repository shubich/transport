import UserService from '../../services/user';

export default function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  UserService.authentication(token)
    .then((user) => {
      if (!user) {
        res.status(403).send({ auth: false, message: 'Missing authentication token' });
      } else {
        UserService.saveToken(res, user);
        next();
      }
    })
    .catch(() => {
      res.status(403).send({ auth: false, message: 'Authentication error' });
    });
}
