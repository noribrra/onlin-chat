import axios from "axios";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Usegetconversation = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setconversation] = useState([]);

  useEffect(() => {
    const getconversations = async () => {
      setloading(true);
      try {
        const res = await axios.get("/api/users");
        const data = await res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setconversation(data);
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
    getconversations();
  }, []);

  return { loading, conversations };
};

export default Usegetconversation;
