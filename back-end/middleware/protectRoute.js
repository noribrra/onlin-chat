import { json } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invaled token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "there is not user found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export default protectRoute;
