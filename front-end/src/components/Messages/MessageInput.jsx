import { IoSendSharp } from "react-icons/io5";

import { useState } from "react";
import Usemessages from "../../hooks/usemessages";

const MessageInput = () => {
  const [inputmessage, setinputmessage] = useState("");
  const { loading, sendmessage } = Usemessages();
  const handelsubmit = async (e) => {
    e.preventDefault();
    if (!inputmessage) return;
    await sendmessage(inputmessage);
    setinputmessage("");
  };
  return (
    <form onSubmit={handelsubmit} className=" px-4 my-3">
      <div className=" w-full relative">
        <input
          value={inputmessage}
          onChange={(e) => {
            setinputmessage(e.target.value);
          }}
          type="text"
          className=" bordered text-sm rounded-lg w-full p-2 bg-gray-700 border-r-gray-500 text-white"
          placeholder="send.."
        />

        <button className=" absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? (
            <span className=" loading loading-spinner"></span>
          ) : (
            <IoSendSharp className=" text-green-400 w-5" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
