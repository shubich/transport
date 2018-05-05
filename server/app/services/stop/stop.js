import StopSchema from './stopSchema';

export default class Stop {
  static addStop(name) {
    const stop = new StopSchema({
      name,
    });

    return stop.save()
      .then(() => stop)
      .catch((err) => {
        console.dir(err.message);
        return null;
      });
  }

  static getAllStops() {
    return StopSchema.find();
  }

  static getStopByid(id) {
    return StopSchema.findOne({ _id: id })
      .then(stop => (stop || null))
      .catch(() => null);
  }

  static getStopByName(name) {
    return StopSchema.findOne({ name });
  }
}
