import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentee', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
