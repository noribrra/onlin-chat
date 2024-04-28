import mongoose from "mongoose";
const connactTomongdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connect to mongo db");
  } catch (err) {
    console.log("error to connect to mongo db", err);
  }
};

export default connactTomongdb;
