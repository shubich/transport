import StopService from '../../services/stop';

export function addStop(req, res) {
  const { name, longitude, latitude } = req.body;

  StopService.addStop(name, longitude, latitude)
    .then((stop) => {
      if (!stop) {
        res.status(403).send('Stop already exist');
      } else {
        res.status(200).send('Stop successfully added');
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

export function editStop(req, res) {
  StopService.editStop(req.body)
    .then((stop) => {
      if (!stop) {
        res.status(403).send('Error');
      } else {
        res.status(200).send('Success');
      }
    })
    .catch(() => res.status(403).send('Server error'));
}


export function deleteStop(req, res) {
  const { name } = req.body;

  StopService.deleteStop(name)
    .then(() => res.status(200).send('Success'))
    .catch(() => res.status(403).send('Server error'));
}

export function getAllStops(req, res) {
  StopService.getAllStops()
    .then((stops) => {
      if (!stops) {
        res.status(403).send('Nothing here yet');
      } else {
        res.status(200).send(stops);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

