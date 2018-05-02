import mongoose from '../../mongo';

const RouteSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // Bus-6, Trolleybus-5...
    required: true,
  },
  vehicleType: {
    type: String,
    enum: ['Bus', 'Trolleybus', 'Tram', 'Minibus'],
    required: true,
  },
  stops: [String],
});

export default mongoose.model('Route', RouteSchema);
