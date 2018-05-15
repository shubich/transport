import VehicleSchema from './vehicleSchema';
// import RouteService from '../route';

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
    // const fullVehicles = await Promise.all(vehicles.map(async (item) => {
    //   const startStop = await StopService.getStopByid(item.stops[0]);
    //   const endStop = await StopService.getStopByid(item.stops[item.stops.length - 1]);

    //   return {
    //     ...item._doc,
    //     description: `${startStop.name} - ${endStop.name}`,
    //   };
    // }));

    // return fullVehicles;
    return vehicles;
  }

  static getVehicleByid(id) {
    return VehicleSchema.findOne({ _id: id })
      .then(vehicle => (vehicle || null))
      .catch(() => null);
  }
}
