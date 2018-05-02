import mongoose from '../../mongo';

const rideSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true,
  },
  vehicle: {
    type: Object,
    required: true,
  },
  payment: {
    type: Number,
    default: 50,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Ride', rideSchema);
