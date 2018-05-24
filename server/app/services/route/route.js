import RouteSchema from './routeSchema';
import StopService from '../stop';

export default class Route {
  static addRoute(number, vehicleType, stops, stopsReverse) {
    const route = new RouteSchema({
      number,
      vehicleType,
      stops,
      stopsReverse,
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
    const routes = await RouteSchema
      .find();
      // .sort('vehicleType number');
    const fullRoutes = await Promise.all(routes.map(async (item) => {
      let description;
      if (item.stops.length) {
        const startStop = await StopService.getStopByid(item.stops[0]);
        const endStop = await StopService.getStopByid(item.stops[item.stops.length - 1]);
        description = `${startStop.name} - ${endStop.name}`;
      }

      return {
        ...item._doc,
        description,
      };
    }));

    return fullRoutes;
  }

  static async getRouteByid(_id) {
    const route = await RouteSchema.findOne({ _id });
    const stops = await Promise.all(route.stops.map(async (item) => {
      const stop = await StopService.getStopByid(item);

      return { ...stop._doc };
    }));

    const stopsReverse = await Promise.all(route.stopsReverse.map(async (item) => {
      const stop = await StopService.getStopByid(item);

      return { ...stop._doc };
    }));

    return {
      ...route._doc,
      stops,
      stopsReverse,
    };
  }

  static getRoutesByStops(from, to) {
    return RouteSchema.find({
      $and: [
        { stops: from },
        { stops: to },
      ],
    });
  }
}
