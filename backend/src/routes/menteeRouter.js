import { getAllMentees, updateMentee } from "../controllers/menteeController.js";
import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.get('/', validateToken, getAllMentees);
router.put("/:id", validateToken, updateMentee);

export default router;
