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
    enum: ['Автобус', 'Троллейбус', 'Трамваи'],
    required: true,
  },
  stops: [String],
});

export default mongoose.model('Route', RouteSchema);
