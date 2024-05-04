import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useconversation from "../store/useconversation";

const Usegemessages = () => {
  const [loading, setloading] = useState(false);
  const { messages, setmessages, selectedconversation } = useconversation();

  useEffect(() => {
    const getmessages = async () => {
      setloading(true);
      try {
        const res = await axios.get(
          `/api/messages/${selectedconversation._id}`
        );
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setmessages(data);
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

    if (selectedconversation?._id) getmessages();
  }, [selectedconversation?._id, setmessages]);

  return { messages, loading };
};

export default Usegemessages;
