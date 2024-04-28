import jwt from "jsonwebtoken";

const generatetokwnsetcookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_PASSWORD, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generatetokwnsetcookie;
