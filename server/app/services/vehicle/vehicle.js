import VehicleSchema from './vehicleSchema';
import RouteService from '../route';

export default class Vehicle {
  static addVehicle(number, route) {
    const vehicle = new VehicleSchema({
      number,
      route,
    });

    return vehicle.save()
      .then(() => Vehicle)
      .catch((err) => {
        console.dir(err.message);
        return null;
      });
  }

  static editVehicle(data) {
    const { _id } = data;

    return VehicleSchema.findOneAndUpdate({ _id }, data, { new: true })
      .then(vehicle => (vehicle || null))
      .catch(() => null);
  }

  static deleteVehicle(id) {
    return VehicleSchema.findOneAndRemove({ _id: id });
  }

  static async getAllVehicles() {
    const vehicles = await VehicleSchema.find();
    const fullVehicles = await Promise.all(vehicles.map(async (item) => {
      const route = await RouteService.getRouteByid(item.route);

      return {
        ...item._doc,
        route,
      };
    }));

    return fullVehicles;
  }

  static async getVehicleByid(id) {
    const vehicle = await VehicleSchema.findOne({ _id: id });
    const route = await RouteService.getRouteByid(vehicle.route);

    return {
      ...vehicle._doc,
      route,
    };
  }

  static async getVehiclesByRoute(route) {
    return VehicleSchema.find({ route });
  }
}
