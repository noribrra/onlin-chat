import { CiLogout } from "react-icons/ci";
import Uselogout from "../../hooks/Userlogout";

const Logouticon = () => {
  const { logout } = Uselogout();
  return (
    <div className=" mt-auto   ">
      <CiLogout
        className=" w-6 h-6 cursor-pointer"
        onClick={() => {
          logout();
        }}
      />
    </div>
  );
};

export default Logouticon;
