import { useState } from "react";
import { Link } from "react-router-dom";
import Uselogin from "../../hooks/Uselogin";
const Login = () => {
  const { loading, login } = Uselogin();
  const [logininputs, setlogininputs] = useState({
    username: "",
    password: "",
  });
  const handelsubmit = async (e) => {
    e.preventDefault();
    await login(logininputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-500  "> NorChat</span>
        </h1>

        <form onSubmit={handelsubmit}>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text"> Username</span>
            </label>
            <input
              value={logininputs.username}
              onChange={(e) => {
                setlogininputs({ ...logininputs, username: e.target.value });
              }}
              type="text"
              placeholder="Enter username "
              className=" w-full input input-bordered h-10"
            />

            <label className="label p-2">
              <span className=" text-base label-text"> password</span>
            </label>
            <input
              value={logininputs.password}
              onChange={(e) => {
                setlogininputs({ ...logininputs, password: e.target.value });
              }}
              type="password"
              placeholder="Enter password "
              className=" w-full input input-bordered h-10"
            />
          </div>
          <Link
            to={"/singup"}
            className=" text-sm hover:underline hover:text-green-400 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? (
              <span className=" loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
