import Checkbox from "./checkbox";
const SingUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SingUp
          <span className="text-green-500  "> NorChat</span>
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text"> Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname "
              className=" w-full input input-bordered h-10"
            />

            <label className="label p-2">
              <span className=" text-base label-text"> Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username "
              className=" w-full input input-bordered h-10"
            />

            <label className="label p-2">
              <span className=" text-base label-text"> password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password "
              className=" w-full input input-bordered h-10"
            />
            <label className="label p-2">
              <span className=" text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password "
              className=" w-full input input-bordered h-10"
            />
          </div>
          <Checkbox />
          <a
            href="#"
            className=" text-sm hover:underline hover:text-green-400 mt-2 inline-block"
          >
            have an account?
          </a>
          <button className="btn btn-block btn-sm mt-2"> SingUp</button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;