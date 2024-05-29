import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "../style/loginStyle.module.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
  };

  function handleNavigate() {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-7xl font-bold py-4 drop-shadow-2xl mt-24">
          CollabSphere
        </h1>
        <p className="text-center text-gray-700 text-2xl mb-8">
          Navigate the workflow seas with ease!
        </p>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-[8rem]">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="w-[25rem] h-[30rem] px-16 py-8  space-y-4 md:space-y-6 sm:p-8 ">
                <p className="text-xl mt-8 text-align-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                  Welcome back!
                </p>
                <div>
                  <label className="block mb-2 text-lg font-medium text-gray-900">
                    Your username
                  </label>
                  <input
                    placeholder="Username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    id="username"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="••••••••"
                    id="password"
                    type="password"
                  />
                </div>
                <button
                  class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                  type="submit"
                  onClick={handleNavigate}
                >
                  Login
                </button>

                <p className="text-center ">
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
