import express from 'express';
import { createPost, getAllPost, getAllUserPosts, updateLikes } from '../Controllers/Post.js';

const router = express.Router();

router.get("/", getAllPost);
router.get("/:id", getAllUserPosts)
router.post("/", createPost);
router.patch("/:id", updateLikes)

export default router;