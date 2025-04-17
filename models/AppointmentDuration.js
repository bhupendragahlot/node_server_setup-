import mongoose from "mongoose";

const appointmentDurationSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      default: null,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const AppointmentDuration = mongoose.model("AppointmentDuration",appointmentDurationSchema);
export default AppointmentDuration;
