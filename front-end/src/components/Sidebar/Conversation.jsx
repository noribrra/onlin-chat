const Conversation = () => {
  return (
    <>
      <div className=" flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer">
        <div className=" avatar online ">
          <div className=" rounded-full w-12">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=n"
              alt="user aavatar"
            />
          </div>
        </div>
        <div className=" flex flex-col flex-1">
          <div className=" flex gap-3 ">
            <p className=" text-gray-200 font-bold">noribra</p>
          </div>
        </div>
      </div>
      <div className=" divider py-0 h-1"></div>
    </>
  );
};

export default Conversation;
