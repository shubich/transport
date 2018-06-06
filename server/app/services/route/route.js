import RouteSchema from './routeSchema';
import StopService from '../stop';
import VehicleService from '../vehicle';
import RideService from '../ride';

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
      let rides = [];

      if (item.stops.length) {
        const startStop = await StopService.getStopByid(item.stops[0]);
        const endStop = await StopService.getStopByid(item.stops[item.stops.length - 1]);
        description = `${startStop.name} - ${endStop.name}`;
      }

      const vehicles = await VehicleService.getVehiclesByRoute(item._id);

      if (vehicles.length) {
        rides = await RideService
          .getRidesByVehicles(vehicles.map(vehicle => ({ vehicle: vehicle._id })));
      }

      const profit = rides.reduce((prev, cur) => prev + cur.payment, 0);

      return {
        ...item._doc,
        description,
        count: vehicles.length,
        passengers: rides.length,
        profit,
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

  static async getRoutesByStops(from, to) {
    const routes = await RouteSchema.find({
      $and: [
        { stops: from },
        { stops: to },
      ],
    });

    const fullRoutes = await Promise.all(routes.map(async (route) => {
      let fromIndex = route.stops.indexOf(from);
      let toIndex = route.stops.indexOf(to);

      /* eslint-disable no-bitwise */
      if (fromIndex > toIndex) {
        fromIndex ^= toIndex;
        toIndex ^= fromIndex;
        fromIndex ^= toIndex;
      }

      const stops = route.stops.slice(fromIndex, toIndex + 1);

      if (stops[0] !== from) {
        stops.reverse();
      }

      const fullStops = await Promise.all(stops.map(async (item) => {
        const stop = await StopService.getStopByid(item);

        return { ...stop._doc };
      }));

      const stopsQuantity = Math.abs(route.stops.indexOf(from) - route.stops.indexOf(to)) - 1;

      return { ...route._doc, stops: fullStops, stopsQuantity };
    }));

    const stopFrom = await StopService.getStopByid(from);
    const stopTo = await StopService.getStopByid(to);

    return {
      routes: fullRoutes,
      way: {
        from: stopFrom,
        to: stopTo,
      },
    };
  }
}
