import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useconversation from "../../store/useconversation";
import { useEffect } from "react";
import { Usercontext } from "../../context/Authcontext";
const Messagescontainer = () => {
  const { selectedconversation, setselectconversation } = useconversation();
  useEffect(() => {
    return setselectconversation(null);
  }, [setselectconversation]);

  return (
    <div className=" flex flex-col  md:w-[550px] h-screen md:float-right">
      {!selectedconversation ? (
        <NochatSeected />
      ) : (
        <>
          <div className=" bg-black px-4 py-2 mb-2">
            <span className=" text-green-800 font-bold ">
              To {selectedconversation.fullname}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NochatSeected = () => {
  const { authuser } = Usercontext();
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className=" px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authuser.fullname}🎇 </p>
        <p>Select chat to start messaging </p>
        <TiMessages className=" text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default Messagescontainer;
