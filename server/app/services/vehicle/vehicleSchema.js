import mongoose from '../../mongo';

const vehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    minlength: 8,
    maxlength: 8,
    unique: true,
    required: true,
  },
  route: {
    type: Object,
    required: true,
  },
});

export default mongoose.model('Vehicle', vehicleSchema);
