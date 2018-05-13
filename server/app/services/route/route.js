import RouteSchema from './routeSchema';

export default class Route {
  static addRoute(number, vehicleType, stops) {
    const route = new RouteSchema({
      number,
      vehicleType,
      stops,
    });

    return route.save()
      .then(() => route)
      .catch((err) => {
        console.dir(err.message);
        return null;
      });
  }

  static editRoute(data) {
    const { _id } = data;

    return RouteSchema.findOneAndUpdate({ _id }, data, { new: true })
      .then(route => (route || null))
      .catch(() => null);
  }

  static deleteRoute(id) {
    return RouteSchema.findOneAndRemove({ _id: id });
  }

  static getAllRoutes() {
    return RouteSchema.find();
  }

  static getRouteByid(id) {
    return RouteSchema.findOne({ _id: id })
      .then(route => (route || null))
      .catch(() => null);
  }
}
