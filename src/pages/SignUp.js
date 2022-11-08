import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

const signup = "./images/auth/signup.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { username, email, password } = FormData;

  // Form Input Change
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username, formData.email, formData.password);
  };

  return (
    <main className="w-screen h-screen">
      <div className="flex items-center">
        <section className="w-1/2 h-screen flex items-center justify-center">
          <img
            src={signup}
            alt="Sign Up SVG"
            width={700}
            className="rounded-md"
          />
        </section>
        <section className="w-1/2 h-screen flex items-center justify-center bg-white">
          <div className="p-8 rounded-lg bg-white border border-gray-100 shadow-xl">
            <h1 className="text-lg md:text-3xl text-gray-800 text-center font-semibold">
              Sign Up
            </h1>
            <form className="w-[500px] mt-10" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                className="mb-4 p-3 rounded-md border border-gray-300 text-gray-600 transition ease-in-out focus:outline-cyan-500 block w-full"
                onChange={onChange}
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                className="mb-4 p-3 rounded-md border border-gray-300 text-gray-600 transition ease-in-out focus:outline-cyan-500 block w-full"
                onChange={onChange}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Password"
                  className="mb-4 p-3 rounded-md border border-gray-300 text-gray-600 transition ease-in-out focus:outline-cyan-500 block w-full"
                  onChange={onChange}
                />
                {!showPassword ? (
                  <>
                    <AiFillEye
                      className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600 cursor-pointer"
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </>
                ) : (
                  <>
                    <AiOutlineEyeInvisible
                      className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600 cursor-pointer"
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </>
                )}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p>
                  Already have account?{" "}
                  <Link to="/signin" className="text-cyan-500">
                    Signin
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
                Sign Up
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

export default SignUp;
