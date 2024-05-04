import Conversation from "./Conversation";
import Usegetconversation from "../../hooks/Usegetconversation";
const Conversations = () => {
  const { loading, conversations } = Usegetconversation();

  return (
    <div className=" py-2 flex flex-col overflow-auto mb-10  ">
      {conversations.map((conversation) => {
        return (
          <Conversation key={conversation._id} conversation={conversation} />
        );
      })}
      {loading ? <span className=" loading loading-spinner"></span> : ""}
    </div>
  );
};

export default Conversations;
