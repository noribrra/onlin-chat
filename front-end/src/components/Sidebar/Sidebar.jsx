import Searchinput from "./Searchinput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
const Sidbar = () => {
  return (
    <div className="  border-r border-gray-200 p-4 flex flex-col h-screen pb-32">
      <Searchinput />
      <div className=" divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidbar;
