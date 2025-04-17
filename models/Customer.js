import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    customer_uni_id: {
      type: String,
      default: null,
      trim: true
    },
    city: {
      type: String,
      default: null,
      trim: true
    },
    state: {
      type: String,
      default: null,
      trim: true
    },
    country: {
      type: String,
      default: null,
      trim: true
    },
    birth_date: {
      type: Date,
      default: null
    },
    gender: {
      type: String,
      default: null,
      enum: ["male", "female", "other", null]
    },
    age: {
      type: Number,
      default: null,
      min: 0
    },
    customer_img: {
      type: String,
      default: null
    },
    longitude: {
      type: String,
      default: null
    },
    latitude: {
      type: String,
      default: null
    },
    birth_place: {
      type: String,
      default: null
    },
    birth_time: {
      type: String,
      default: null
    },
    time_zone: {
      type: String,
      default: null
    },
    is_dosha_checked: {
      type: Boolean,
      default: false
    },
    is_pitra_dosha: {
      type: Boolean,
      default: false
    },
    is_manglik_dosh: {
      type: Boolean,
      default: false
    },
    is_kaalsarp_dosh: {
      type: Boolean,
      default: false
    },
    is_anonymous_review: {
      type: Boolean,
      default: false
    },
    process_status: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
