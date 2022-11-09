import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import { toast } from "react-toastify";

import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import OAuth from "./../components/OAuth";

const signin = "./images/auth/signin.png";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = FormData;
  const navigate = useNavigate();

  // Form Input Change
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

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
            <form className="w-[500px] mt-10" onSubmit={handleSubmit}>
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
                  className="mb-4 p-3 rounded-md border border-gray-300 text-gray-600 transition ease-in-out duration-300 focus:outline-cyan-500 block w-full"
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
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-cyan-500 hover:text-cyan-700 transition ease-in-out duration-300"
                  >
                    Register
                  </Link>
                </p>
                <Link to="/forgot-password" className="text-blue-500">
                  Forgot password
                </Link>
              </div>
              <button
                type="submit"
                className="py-3 md:py-4 w-full bg-cyan-500 hover:bg-cyan-700 text-white uppercase mt-5 rounded-lg transition ease-in-out duration-300"
              >
                Sign In
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

export default SignIn;
