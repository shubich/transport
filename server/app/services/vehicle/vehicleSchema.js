import mongoose from '../../mongo';

const VehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    minlength: 8,
    maxlength: 8,
    trim: true,
    unique: true,
    required: true,
  },
  route: {
    type: Object,
    required: true,
  },
});

export default mongoose.model('Vehicle', VehicleSchema);
