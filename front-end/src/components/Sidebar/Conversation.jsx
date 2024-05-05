import { Usesocket } from "../../context/socketcontext";
import useconversation from "../../store/useconversation";

const Conversation = ({ conversation }) => {
  const { onlinusers } = Usesocket();
  const { selectedconversation, setselectconversation } = useconversation();
  const isselected = selectedconversation?._id === conversation._id;
  const isonlin = onlinusers.includes(conversation._id);
  return (
    <>
      <div
        className={` flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer  ${
          isselected ? "bg-green-400" : ""
        } `}
        onClick={() => {
          setselectconversation(conversation);
        }}
      >
        <div className={`avatar ${isonlin ? "online " : ""}`}>
          <div className=" rounded-full w-12">
            <img src={conversation.profilepic} alt="user aavatar" />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className=" flex gap-3 ">
            <p className=" text-gray-200 font-bold">{conversation.fullname}</p>
          </div>
        </div>
      </div>
      <div className=" divider py-0 h-1"></div>
    </>
  );
};

export default Conversation;
