import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Usegetconversation from "../../hooks/Usegetconversation";
import useconversation from "../../store/useconversation";
import toast from "react-hot-toast";
const Searchinput = () => {
  const [search, setsearch] = useState("");
  const { conversations } = Usegetconversation();
  const { setselectconversation } = useconversation();
  const handalsubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    if (search.length < 3) {
      return toast.error("Must be more than 3 characters");
    }

    const conversation = conversations.find((C) =>
      C.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setselectconversation(conversation);
      setsearch("");
    } else {
      toast.error("No user found");
    }
  };
  return (
    <form onSubmit={handalsubmit} className=" flex items-center gap-2">
      <input
        value={search}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
        type="text"
        placeholder="Search.."
        className=" input input-bordered rounded-full"
      />
      <button className="btn btn-circle bg-green-400 text-white">
        <FiSearch className=" w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Searchinput;
