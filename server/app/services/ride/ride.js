import RideSchema from './rideSchema';

export default class Stop {
  static addRide(user, vehicle, from, to) {
    const ride = new RideSchema({
      user, vehicle, from, to,
    });

    return ride.save()
      .then(() => ride)
      .catch(() => null);
  }

  static getUserRides(uid) {
    return RideSchema.find({ user: uid });
  }
}
