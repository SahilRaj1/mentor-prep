import { deletePost, getAllPosts, updatePost, createPost } from "../controllers/postController.js";
import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.get("/", validateToken, getAllPosts);
router.post("/", validateToken, createPost);
router.put("/:id", validateToken, updatePost);
router.delete("/:id", validateToken, deletePost);

export default router;
