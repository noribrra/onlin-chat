import express from "express";
import { sendmessage, getmessages } from "../controllers/messageControllers.js";
import protectRoute from "../middleware/protectRoute.js";
const route = express.Router();

route.post("/send/:id", protectRoute, sendmessage);
route.get("/:id", protectRoute, getmessages);

export default route;
