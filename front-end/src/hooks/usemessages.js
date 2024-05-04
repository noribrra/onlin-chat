import { useState } from "react";
import useconversation from "../store/useconversation";
import toast from "react-hot-toast";
import axios from "axios";

const Usemessages = () => {
  const [loading, setloading] = useState(false);
  const { messages, setmessages, selectedconversation } = useconversation();

  const sendmessage = async (message) => {
    setloading(true);
    try {
      const res = await axios.post(
        `api/messages/send/${selectedconversation._id}`,
        {
          message: message,
        }
      );
      const data = await res.data;

      if (data.error) {
        throw new Error(data.error);
      }
      setmessages([...messages, data]);
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

  return { loading, sendmessage };
};

export default Usemessages;
