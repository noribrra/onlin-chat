import Sidbar from "../../components/Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
import Messagecontaier from "../../components/Messages/Messagescontainer";
// const Home = () => {
//   return (
//     <div className=" flex overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  sm:h[450px] md:h-[550px] rounded-lg  ">
//       <Sidbar />
//       <Messagecontaier />
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <div className="drawer bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content static">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn border-none  bg-transparent absolute top-0 right-2 drawer-button"
        >
          <CiMenuBurger className=" text-white" />
        </label>
        <Messagecontaier />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidbar />
      </div>
    </div>
  );
};

export default Home;
