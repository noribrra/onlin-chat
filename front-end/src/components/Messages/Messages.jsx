import Usegemessages from "../../hooks/Usegemessages";
import Message from "./Message";
import Skeletons from "../skeletons/skeletons";
const Messages = () => {
  const { messages, loading } = Usegemessages();

  return (
    <div className=" px-4 flex-1 overflow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          return <Message key={message._id} ms={message} />;
        })}

      {loading && <Skeletons />}
      {!loading && messages.length === 0 && (
        <p className=" text-center ">Send message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
