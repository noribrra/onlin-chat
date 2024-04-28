import express from "express";
import {
  loginUser,
  logoutUser,
  singupUser,
} from "../controllers/authControllers.js";
const router = express.Router();

// login router
router.post("/login", loginUser);

// singup router
router.post("/singup", singupUser);

// logout router
router.post("/logout", logoutUser);

export default router;
