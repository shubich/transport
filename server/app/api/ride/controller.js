import UserService from '../../services/user';
import RideService from '../../services/ride';

export function addRide(req, res) {
  const token = req.header('Authorization');
  const uid = token ? UserService.decodeToken(token).uid : null;

  const {
    vehicle, from, to,
  } = req.body;

  RideService.addRide(uid, vehicle, from, to)
    .then(() => {
      res.status(200).send('Ride successfully added');
    })
    .catch(() => res.status(403).send('Server error'));
}

export function getUserRides(req, res) {
  const token = req.header('Authorization');
  const uid = token ? UserService.decodeToken(token).uid : null;

  RideService.getUserRides(uid)
    .then((data) => {
      if (!data) {
        res.status(403).send('Nothing here yet');
      } else {
        res.status(200).send(data);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}
