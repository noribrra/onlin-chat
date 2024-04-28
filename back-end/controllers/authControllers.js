import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import generatetokwnsetcookie from "../utils/generatetoken.js";
// singup router
export const singupUser = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "password don't mach" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "user already exists" });
    }

    // hash passowrd
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    // avatar
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    try {
      const newuser = await new User({
        fullname,
        username,
        password: hashpassword,
        gender,
        profilepic: gender === "male" ? boyprofilepic : girlprofilepic,
      });
      await generatetokwnsetcookie(newuser._id, res);
      await newuser.save();

      res.status(201).json({
        _id: newuser._id,
        fullname: newuser.fullname,
        username: newuser.username,
        profilepic: newuser.profilepic,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } catch (err) {
    res.status(500).json({ error: "entirnal server eroor" });
    console.log(err);
  }
};

// singin router
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const ispasswordiscorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !ispasswordiscorrect) {
      return res.status(400).json({ error: "invalid username or passowrd" });
    }
    generatetokwnsetcookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullname: user.fullname,
      profilepic: user.profilepic,
    });
  } catch (err) {
    res.status(500).json({ error: "entirnal server eroor" });
    console.log(err);
  }
};

//   logout router
export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: "entirnal server eroor" });
    console.log(err);
  }
};
