import mongoose from '../../mongo';

const VehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    minlength: 4,
    maxlength: 8,
    trim: true,
    unique: true,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Vehicle', VehicleSchema);
