import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    expertise: { type: [String], required: true },
    description: { type: String },
    rating: { type: Number, default: 0 },
    yearsOfExperience: { type: Number },
    currentPostTitle: { type: String },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
}, { timestamps: true });

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;