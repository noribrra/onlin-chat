import express from "express";
import { getallusers } from "../controllers/usersControllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();
router.get("/", protectRoute, getallusers);
export default router;
