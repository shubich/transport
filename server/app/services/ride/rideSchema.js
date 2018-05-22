import mongoose from '../../mongo';

const RideSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  payment: {
    type: Number,
    default: 0.5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Ride', RideSchema);
