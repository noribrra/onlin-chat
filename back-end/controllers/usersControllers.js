import User from "../models/userModels.js";

export const getallusers = async (req, res) => {
  try {
    const loggedId = req.user._id;

    const users = await User.find({ _id: { $ne: loggedId } }).select(
      "-password"
    );

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "invaled server error" });
    console.log(err.message);
  }
};
