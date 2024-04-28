import Sidbar from "../../components/Sidebar/Sidebar";
import Messagecontaier from "../../components/Messages/Messagescontainer";
const Home = () => {
  return (
    <div className=" flex overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  sm:h[450px] md:h-[550px] rounded-lg  ">
      <Sidbar />
      <Messagecontaier />
    </div>
  );
};

export default Home;
