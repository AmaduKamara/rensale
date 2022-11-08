import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

const signin = "./images/auth/signin.png";

const SignIn = () => {
  return (
    <main className="w-screen h-screen">
      <div className="flex items-center">
        <section className="w-1/2 h-screen flex items-center justify-center">
          <img
            src={signin}
            alt="Sign In SVG"
            width={700}
            className="rounded-md"
          />
        </section>
        <section className="w-1/2 h-screen flex items-center justify-center bg-white">
          <div className="p-8 rounded-lg bg-white border border-gray-100 shadow-xl">
            <h1 className="text-lg md:text-3xl text-gray-800 text-center font-semibold">
              Sign In
            </h1>
            <form className="w-[500px] mt-10">
              <input
                type="email"
                name=""
                value=""
                placeholder="Email"
                className="mb-4 p-3 rounded-md border focus:outline-cyan-500 block w-full"
              />
              <input
                type="password"
                name=""
                value=""
                placeholder="Password"
                className="mb-4 p-3 rounded-md border focus:outline-cyan-500 block w-full"
              />
              <div className="mt-4 flex justify-between items-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-cyan-500">
                    Register
                  </Link>
                </p>
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot password
                </Link>
              </div>
              <button
                type="submit"
                className="py-3 md:py-4 w-full bg-cyan-500 hover:bg-cyan-700 text-white uppercase mt-5 rounded-lg"
              >
                Sign In
              </button>
              <p className="text-center border-cyan-500 mt-6 w-full flex justify-between items-center">
                <span className="bg-gray-100 mx-5 h-1 w-full"></span> OR{" "}
                <span className="bg-gray-100 mx-5 h-1 w-full"></span>
              </p>
              <div className="flex items-center justify-center mt-2">
                <div className="h-12 w-12 rounded-full shadow-xl flex items-center justify-center border border-gray-100">
                  <Link to="/">
                    <FcGoogle size={30} />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
