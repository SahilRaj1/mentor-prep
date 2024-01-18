import { getAllMentees } from "../controllers/menteeController";
import { Router } from "express";
import validateToken from "../middlewares/validateToken";

const router = Router();

router.get('/mentees', validateToken, getAllMentees);
router.put("/:id", validateToken, menteeControllers.updateMentee);