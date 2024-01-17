import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    rating: { type: Number, required: true },
    mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    mentee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentee', required: true },
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
