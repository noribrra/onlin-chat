import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/aouthRoute.js";
import connactTomongdb from "./db/connectTomongodb.js";
import messageRoute from "./routes/massegeRoute.js";
import getusersRoute from "./routes/getusersRoute.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// midelwier
app.use(express.json());
app.use(cookieParser());

// routers
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", getusersRoute);

app.get("/", (req, res) => {
  console.log("nor");
  res.send("nor");
});

app.listen(port, () => {
  connactTomongdb();
  console.log(`server runing on ${port}`);
});
