import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Usercontext } from "../context/Authcontext";

const UseSingup = () => {
  const { setauthuser } = Usercontext();
  const [loading, setloading] = useState(false);
  const singup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleinputs({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) {
      return;
    }
    setloading(true);
    try {
      const res = await axios.post("/api/auth/singup", {
        fullname,
        username,
        password,
        confirmpassword,
        gender,
      });
      console.log(res);
      if (res.data.error) {
        throw new Error(res.data.error);
      }

      // local storeg
      localStorage.setItem("user", JSON.stringify(res.data));
      // set users
      setauthuser(res.data);
      toast.success("singup success");
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error);
      } else {
        toast.error(err.message);
      }
    } finally {
      setloading(false);
    }
  };

  return { loading, singup };
};

export default UseSingup;

function handleinputs({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("please fill in all fiels.");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Th password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Th password most be at least 6 characters");

    return false;
  }
  return true;
}
