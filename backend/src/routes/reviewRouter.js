import express from "express";
import * as reviewControllers from "../controllers/reviewController";
import validateToken from "../middlewares/validateToken"; // Assuming you have a validateToken middleware

const router = express.Router();

// ROUTE: Get all reviews of a mentor: GET '/reviews/mentor/:mentorId"
router.get("/mentor/:mentorId", validateToken, reviewControllers.getAllReviewsByMentor);
router.delete("/:reviewId", validateToken, reviewControllers.deleteReviewByMentee);

export default router;
