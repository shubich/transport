import mongoose from '../../mongo';

const StopSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  longitude: {
    type: Number,
    trim: true,
  },
  latitude: {
    type: Number,
    trim: true,
  },
});

export default mongoose.model('Stop', StopSchema);
