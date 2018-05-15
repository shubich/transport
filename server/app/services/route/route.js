import RouteSchema from './routeSchema';
import StopService from '../stop';

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

  static async getAllRoutes() {
    const routes = await RouteSchema.find();
    const fullRoutes = await Promise.all(routes.map(async (item) => {
      const startStop = await StopService.getStopByid(item.stops[0]);
      const endStop = await StopService.getStopByid(item.stops[item.stops.length - 1]);

      return {
        ...item._doc,
        description: `${startStop.name} - ${endStop.name}`,
      };
    }));

    return fullRoutes;
  }

  static getRouteByid(id) {
    return RouteSchema.findOne({ _id: id })
      .then(route => (route || null))
      .catch(() => null);
  }
}
