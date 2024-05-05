import { Usercontext } from "../../context/Authcontext";
import useconversation from "../../store/useconversation";
import extracttime from "../../../utils/extracttime";
const Message = ({ ms }) => {
  const { authuser } = Usercontext();
  const { selectedconversation } = useconversation();
  const fromme = ms.senderId === authuser._id;

  const chatclassname = fromme ? "chat-end" : "chat-start ";
  const profilepic = fromme
    ? authuser.profilepic
    : selectedconversation.profilepic;

  const bgcolor = fromme ? " bg-green-500" : "bg-blue-300";

  return (
    <div className={` chat ${chatclassname}`}>
      <div className=" chat-image avatar">
        <div className=" w-10 rounded-full">
          <img src={profilepic} alt="chat icon" />
        </div>
      </div>
      <div className={` chat-bubble text-white  ${bgcolor}  `}>
        {ms.message}
      </div>
      <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extracttime(ms.createdAt)}
      </div>
    </div>
  );
};

export default Message;
