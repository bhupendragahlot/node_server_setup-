import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema(
  {
    user_id: { type: Number, default: null },
    astrologer_uni_id: { type: String, default: null, trim: true },
    display_name: { type: String, default: null, trim: true },
    slug: {
      type: String,
      default: null,
      trim: true,
      unique: true,
      sparse: true
    },
    house_no: { type: String, default: null, trim: true },
    street_area: { type: String, default: null, trim: true },
    address: { type: String, default: null, trim: true },
    landmark: { type: String, default: null, trim: true },
    city: { type: String, default: null, trim: true },
    state: { type: String, default: null, trim: true },
    country: { type: String, default: null, trim: true },
    latitude: { type: String, default: null },
    longitude: { type: String, default: null },
    birth_date: { type: String, default: null },
    gender: {
      type: String,
      default: null,
      enum: ["male", "female", "other", null]
    },
    pin_code: { type: Number, default: null },
    experience: { type: Number, default: null },
    existing_website: { type: Boolean, default: false },
    existing_fees: { type: Number, default: 0 },
    associate_temple: { type: Boolean, default: false },
    writing_experience: { type: Number, default: 0 },
    writing_language: { type: String, default: null },
    writing_details: { type: String, default: null },
    teaching_experience: { type: Boolean, default: false },
    teaching_subject: { type: String, default: null },
    teaching_year: { type: Number, default: 0.0 },
    available_gadgets: { type: String, default: null },
    astro_img: { type: String, default: null },
    live_status: { type: Boolean, default: false },
    video_status: { type: Boolean, default: false },
    online_status: { type: Boolean, default: false },
    call_status: { type: Boolean, default: false },
    chat_status: { type: Boolean, default: false },
    emergency_video_status: { type: Number, default: 0 },
    emergency_chat_status: { type: Number, default: 0 },
    emergency_call_status: { type: Number, default: 0 },
    busy_status: { type: Boolean, default: false },
    no_response_count: { type: Number, default: 0 },
    admin_percentage: { type: Number, default: null },
    live_permission: { type: Number, default: 1 },
    slot_permission: { type: Number, default: 0 },
    livetoken: { type: String, default: null },
    livechannel: { type: String, default: null },

    live_expire: { type: Date, default: null },
    live_topic: { type: String, default: null },
    next_request_time: { type: Date, default: null },
    astro_next_online_datetime: { type: Date, default: null },

    process_status: { type: Number, default: 0 },
    long_biography: { type: String, default: "My Profile" },
    tag: { type: String, default: "New" },
    sort_by: { type: Number, default: 0 },

    ask_question_price: { type: Number, default: 0.0 },
    degrees: { type: String, default: null },

    is_verified: { type: Boolean, default: false },
    is_virtual: { type: Boolean, default: false },

    ai_astrologer_category: { type: String, default: null },
    user_category_id: { type: Number, default: 0 },

    specialization: { type: String, required: true, trim: true },
    other_app_profile_link: { type: String, required: true, trim: true },

    dummy_call_duration: { type: Number, default: 0 },
    dummy_chat_duration: { type: Number, default: 0 },
    dummy_video_duration: { type: Number, default: 0 },
    dummy_total_orders: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Astrologer = mongoose.model("Astrologer", astrologerSchema);
export default Astrologer;
