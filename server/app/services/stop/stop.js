import StopSchema from './stopSchema';

export default class Stop {
  static addStop(name, longitude, latitude) {
    const stop = new StopSchema({
      name,
      longitude,
      latitude,
    });

    return stop.save()
      .then(() => stop)
      .catch((err) => {
        console.dir(err.message);
        return null;
      });
  }

  static editStop(data) {
    const { _id } = data;

    return StopSchema.findOneAndUpdate({ _id }, data, { new: true })
      .then(stop => (stop || null))
      .catch(() => null);
  }

  static deleteStop(name) {
    return StopSchema.findOneAndRemove({ name });
  }

  static getAllStops() {
    return StopSchema.find().sort('name');
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
