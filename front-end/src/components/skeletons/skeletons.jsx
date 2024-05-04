const Skeletons = () => {
  return (
    <div className=" float-right flex flex-col gap-4 w-52">
      <div className=" skeleton bg-white h-32 w-full"></div>
      <div className="skeleton bg-white h-4 w-28"></div>
      <div className="skeleton bg-white h-4 w-full"></div>
      <div className=" bg-white skeleton h-4 w-full"></div>
    </div>
  );
};

export default Skeletons;
