import { Link } from "react-router-dom";
import Checkbox from "./checkbox";
import { useState } from "react";
import UseSingup from "../../hooks/UseSingup";
const SingUp = () => {
  const [inputs, setinputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const handlegender = (gender) => {
    setinputs({ ...inputs, gender });
  };

  // eslint-disable-next-line no-unused-vars
  const { singup, loading } = UseSingup();
  const handlesubmit = async (e) => {
    e.preventDefault();
    await singup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SingUp
          <span className="text-green-500  "> NorChat</span>
        </h1>

        <form onSubmit={handlesubmit}>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text"> Fullname</span>
            </label>
            <input
              value={inputs.fullname}
              onChange={(e) => {
                setinputs({ ...inputs, fullname: e.target.value });
              }}
              type="text"
              placeholder="Enter fullname "
              className=" w-full input input-bordered h-10"
            />

            <label className="label p-2">
              <span className=" text-base label-text"> Username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) => {
                setinputs({ ...inputs, username: e.target.value });
              }}
              type="text"
              placeholder="Enter username "
              className=" w-full input input-bordered h-10"
            />

            <label className="label p-2">
              <span className=" text-base label-text"> password</span>
            </label>
            <input
              value={inputs.password}
              onChange={(e) => {
                setinputs({ ...inputs, password: e.target.value });
              }}
              type="password"
              placeholder="Enter password "
              className=" w-full input input-bordered h-10"
            />
            <label className="label p-2">
              <span className=" text-base label-text">Confirm password</span>
            </label>
            <input
              value={inputs.confirmpassword}
              onChange={(e) => {
                setinputs({ ...inputs, confirmpassword: e.target.value });
              }}
              type="password"
              placeholder="confirm password "
              className=" w-full input input-bordered h-10"
            />
          </div>
          <Checkbox changegender={handlegender} selectgender={inputs.gender} />
          <Link
            to={"/login"}
            className=" text-sm hover:underline hover:text-green-400 mt-2 inline-block"
          >
            have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? (
              <span className=" loading loading-spinner"></span>
            ) : (
              "SingUp"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
