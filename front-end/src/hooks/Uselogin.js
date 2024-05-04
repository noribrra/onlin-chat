import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Usercontext } from "../context/Authcontext";

const Uselogin = () => {
  const { setauthuser } = Usercontext();
  const [loading, setloading] = useState(false);
  const login = async ({ username, password }) => {
    setloading(true);
    try {
      const res = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const data = await res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      setauthuser(data);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("login success");
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

  return { loading, login };
};

export default Uselogin;
