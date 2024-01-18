import Review from "../models/ReviewModel";

export const fetchPaginatedReviewsByMentor = async (mentorId, page, limit) => {
    const reviews = await Review.find({ mentor_id: mentorId })
        .skip((page - 1) * limit)
        .limit(limit);
    return reviews;
};


export const deleteReviewByMentee = async (reviewId, menteeId) => {
  
    const review = await Review.findOne({ _id: reviewId, mentee_id: menteeId });

    if (!review) {
        return null; // Review not found or mentee doesn't match
    }

    await Review.deleteOne({ _id: reviewId });
    return review;
};