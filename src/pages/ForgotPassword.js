import React, { useState } from "react";
import { Link } from "react-router-dom";

import OAuth from "./../components/OAuth";

const forgotPassword = "./images/auth/forgot-password.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // Form Input Change
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <main className="w-screen h-screen">
      <div className="flex items-center">
        <section className="w-1/2 h-screen flex items-center justify-center">
          <img
            src={forgotPassword}
            alt="Forgot password SVG"
            width={700}
            className="rounded-md"
          />
        </section>
        <section className="w-1/2 h-screen flex items-center justify-center bg-white">
          <div className="p-8 rounded-lg bg-white border border-gray-100 shadow-xl">
            <h1 className="text-lg md:text-3xl text-gray-800 text-center font-semibold">
              Forgot Password
            </h1>
            <form className="w-[500px] mt-10" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                className="mb-4 p-3 rounded-md border border-gray-300 transition ease-in-out duration-300 text-gray-600 focus:outline-cyan-500 block w-full"
                onChange={onChange}
              />
              <div className="mt-4 flex justify-between items-center">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-cyan-500 hover:text-cyan-700 transition ease-in-out duration-300"
                  >
                    Register
                  </Link>
                </p>
                <Link to="/signin" className="text-blue-500">
                  Signin instead
                </Link>
              </div>
              <button
                type="submit"
                className="py-3 md:py-4 w-full bg-cyan-500 hover:bg-cyan-700 text-white uppercase mt-5 rounded-lg transition ease-in-out duration-300"
              >
                Submit Reset Email
              </button>
              <div className="my-3 flex items-center  before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;
