import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../components/button";

export const Register = () => {
  return (
    <section>
      {/* bradcrubms */}
      <div className=" bg-primary relative">
        <img
          className="w-full opacity-50 md:h-96 h-48"
          src="/images/bradCrumbs.jpg"
          alt=""
        />
        <div className=" absolute top-10 inset-0 w-96 h-24 mx-auto my-auto text-center text-white">
          <h3 className="text-4xl md:text-6xl font-bold ">Login</h3>
          <Link to="" className="font-bold ">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link className="font-bold" to="">
            Login
          </Link>
        </div>
      </div>

      {/* content */}
      <section className="my-24">
        <div className="inset-0 md:w-[400px] w-full h-[560px] mx-auto my-auto shadow-2xl rounded p-10">
          <h2 className=" text-third text-2xl font-bold">
            Create an customer account
          </h2>
          <p className="text-gray-500 my-3">
            Please fill in the information below
          </p>

          <form action="">
            <input
              type="text"
              className="w-full border-2 rounded-md py-3 px-7 my-2"
              placeholder="name"
              name=""
              id=""
            />

            <input
              type="email"
              className="w-full border-2 rounded-md py-3 px-7 my-2"
              placeholder="Email"
              name=""
              id=""
            />

            <input
              type="password"
              className="w-full border-2 rounded-md py-3 px-7 my-2"
              placeholder="**********"
              name=""
              id=""
            />

            <input
              type="password"
              className="w-full border-2 rounded-md py-3 px-7 my-2"
              placeholder="confrim password"
              name=""
              id=""
            />

            <div className="inset-0 mx-auto text-center my-2">
              <PrimaryButton name="Register"></PrimaryButton>
            </div>

            <div className="text-center mt-4">
              <Link to="/login" className="text-gray-500 text-xl">
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};
