import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";
import { getAllMentors, updateMentor } from "../controllers/mentorController.js";

const router = Router();

router.get('/', validateToken, getAllMentors);
router.put("/:id", validateToken, updateMentor);

export default router;
