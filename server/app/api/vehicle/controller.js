import VehicleService from '../../services/vehicle';

export function addVehicle(req, res) {
  const { number, route } = req.body;

  VehicleService.addVehicle(number, route)
    .then((data) => {
      if (!data) {
        res.status(403).send('Vehicle already exist');
      } else {
        res.status(200).send('Vehicle successfully added');
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

export function editVehicle(req, res) {
  VehicleService.editVehicle(req.body)
    .then((data) => {
      if (!data) {
        res.status(403).send('Error');
      } else {
        res.status(200).send('Success');
      }
    })
    .catch(() => res.status(403).send('Server error'));
}


export function deleteVehicle(req, res) {
  const { id } = req.body;

  VehicleService.deleteVehicle(id)
    .then(() => res.status(200).send('Success'))
    .catch(() => res.status(403).send('Server error'));
}

export function getAllVehicles(req, res) {
  VehicleService.getAllVehicles()
    .then((data) => {
      if (!data) {
        res.status(403).send('Nothing here yet');
      } else {
        res.status(200).send(data);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

export function getVehicleByid(req, res) {
  VehicleService.getVehicleByid(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(403).send('Nothing');
      } else {
        res.status(200).send(data);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

