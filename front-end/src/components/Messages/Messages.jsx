import Usegemessages from "../../hooks/Usegemessages";
import Message from "./Message";
import Skeletons from "../skeletons/skeletons";
import { useEffect, useRef } from "react";
import Uselistenmessage from "../../hooks/Uselistenmessage";
const Messages = () => {
  const { messages, loading } = Usegemessages();
  const lastmessageref = useRef();
  Uselistenmessage();
  useEffect(() => {
    setTimeout(() => {
      lastmessageref.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [messages]);
  return (
    <div className=" px-4 flex-1 overflow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div ref={lastmessageref} key={message._id}>
              <Message ms={message} />
            </div>
          );
        })}

      {loading && <Skeletons />}
      {!loading && messages.length === 0 && (
        <p className=" text-center ">Send message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
