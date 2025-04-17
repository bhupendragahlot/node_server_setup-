import mongoose from 'mongoose';

const adminApiLogSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    trim: true,
  },
  request: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  response: {
    type: mongoose.Schema.Types.Mixed, 
    required: true,
  },
  status: {
    type: Number,
    default: 1,
  }
}, { timestamps: true }
);

const AdminApiLog = mongoose.model('AdminApiLog', adminApiLogSchema);

export default AdminApiLog;
