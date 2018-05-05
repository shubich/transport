import mongoose from '../../mongo';

const RouteSchema = new mongoose.Schema({
  number: {
    type: String,
    trim: true,
    // unique: manual check
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
