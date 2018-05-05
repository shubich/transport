import mongoose from '../../mongo';

const StopSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

export default mongoose.model('Stop', StopSchema);
