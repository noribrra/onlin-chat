import { useEffect } from "react";
import { Usesocket } from "../context/socketcontext";
import useconversation from "../store/useconversation";
import notification from "../assets/sounds/notification.mp3";
const Uselistenmessage = () => {
  const { socket } = Usesocket();
  const { messages, setmessages } = useconversation();

  useEffect(() => {
    socket?.on("newmessage", (newmessage) => {
      const sound = new Audio(notification);
      sound.play();
      setmessages([...messages, newmessage]);
    });
    return () => socket?.off("newmessage");
  }, [socket, setmessages, messages]);
};

export default Uselistenmessage;
