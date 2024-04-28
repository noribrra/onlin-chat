import { FiSearch } from "react-icons/fi";
const Searchinput = () => {
  return (
    <form className=" flex items-center gap-2">
      <input
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
