// routes/userRoutes.js
import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

// import checkRequest from "../middleware/checkRequest.js"; // 👈 import middleware

const router = express.Router();

// ✅ Apply middleware LOCALLY per route
router.get("/get", getAllUsers);
router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
