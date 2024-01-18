
import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { getAllMentors } from "../controllers/mentorController";

const router = Router();

router.get('/mentors', validateToken, getAllMentors);
router.put("/:id", validateToken, mentorControllers.updateMentor);