import RideSchema from './rideSchema';
import StopService from '../stop';
import VehicleService from '../vehicle';
import UserService from '../user';

export default class Stop {
  static addRide(user, vehicle, from, to) {
    const ride = new RideSchema({
      user, vehicle, from, to,
    });

    return ride.save()
      .then(() => {
        UserService.putMoney(user, -(ride.payment));
        return ride;
      })
      .catch(() => null);
  }

  static async getUserRides(uid) {
    const rides = await RideSchema
      .find({ user: uid })
      .sort('-date');

    const fullRides = await Promise.all(rides.map(async (item) => {
      const from = await StopService.getStopByid(item.from);
      const to = await StopService.getStopByid(item.to);
      const vehicle = await VehicleService.getVehicleByid(item.vehicle);

      return {
        ...item._doc,
        vehicle,
        from,
        to,
      };
    }));

    return fullRides;
  }

  static getRidesByVehicles(vehicles) {
    return RideSchema.find({ $or: vehicles });
  }
}
