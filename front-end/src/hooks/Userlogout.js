import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Usercontext } from "../context/Authcontext";

const Uselogout = () => {
  const { setauthuser } = Usercontext();
  const [loading, setloading] = useState(false);
  const logout = async () => {
    setloading(true);
    try {
      const res = await axios.post("/api/auth/logout");
      if (res.data.err) {
        throw new Error(res.data.err);
      }

      localStorage.removeItem("user");
      toast.success("logout success");
      setauthuser(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, logout };
};

export default Uselogout;
