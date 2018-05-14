import RouteService from '../../services/route';

export function addRoute(req, res) {
  const { number, vehicleType, stops } = req.body;

  RouteService.addRoute(number, vehicleType, stops)
    .then((route) => {
      if (!route) {
        res.status(403).send('Route already exist');
      } else {
        res.status(200).send('Route successfully added');
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

export function editRoute(req, res) {
  RouteService.editRoute(req.body)
    .then((route) => {
      if (!route) {
        res.status(403).send('Error');
      } else {
        res.status(200).send('Success');
      }
    })
    .catch(() => res.status(403).send('Server error'));
}


export function deleteRoute(req, res) {
  const { id } = req.body;

  RouteService.deleteRoute(id)
    .then(() => res.status(200).send('Success'))
    .catch(() => res.status(403).send('Server error'));
}

export function getAllRoutes(req, res) {
  RouteService.getAllRoutes()
    .then((routes) => {
      if (!routes) {
        res.status(403).send('Nothing here yet');
      } else {
        res.status(200).send(routes);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

export function getRouteByid(req, res) {
  RouteService.getRouteByid(req.params.id)
    .then((route) => {
      if (!route) {
        res.status(403).send('Nothing');
      } else {
        res.status(200).send(route);
      }
    })
    .catch(() => res.status(403).send('Server error'));
}

