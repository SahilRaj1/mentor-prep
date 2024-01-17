import { getAllUsers, updateUserController } from "../controllers/userController.js";
import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";
import uploadImage from "../middlewares/uploadImage.js";

const router = Router();

// ROUTE 1: Create a user using: GET 'api/users". [admin]
router.get('/', validateToken, getAllUsers);

// ROUTE 2: Update a user using: PUT 'api/users/:id". [Login Required]
router.put('/:id', validateToken, uploadImage.single("img"), updateUserController);

export default router;