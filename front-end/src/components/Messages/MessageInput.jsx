import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className=" px-4 my-3">
      <div className=" w-full relative">
        <input
          type="text"
          className=" bordered text-sm rounded-lg w-full p-2 bg-gray-700 border-r-gray-500 text-white"
          placeholder="send.."
        />

        <button className=" absolute inset-y-0 end-0 flex items-center pe-3">
          <IoSendSharp className=" text-green-400 w-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
