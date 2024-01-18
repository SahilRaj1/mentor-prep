import { getAllBookings, getAllMenteeBookings, getAllMentorBookings } from "../controllers/bookingController.js";
import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.get('/', validateToken, getAllBookings);
router.get('/mentor/:id', validateToken, getAllMentorBookings);
router.get('/mentee/:id', validateToken, getAllMenteeBookings);

export default router;