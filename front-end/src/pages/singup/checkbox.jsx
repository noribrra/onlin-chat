const checkbox = () => {
  return (
    <div className=" flex ">
      <div className=" form-control">
        <label className=" label gap-1 cursor-pointer">
          <span className=" label-text">Male</span>
          <input type="checkbox" className=" checkbox border-gray-300 " />
        </label>
      </div>
      <div className=" form-control">
        <label className=" label gap-1 cursor-pointer">
          <span className=" label-text">Female</span>
          <input type="checkbox" className=" checkbox border-gray-300 " />
        </label>
      </div>
    </div>
  );
};

export default checkbox;
