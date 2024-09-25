import React, { useState } from "react";
import { Link } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import LogoutButton from "./LogoutButton";

export default function UserOptions() {
  const isAuthenticated = useIsAuthenticated();

  const [showUserOptions, setShowUserOptions] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-center bg-black rounded-full text-white  hover:shadow-xl cursor-pointer border-2 border-white"
        onClick={() => setShowUserOptions((currState) => !currState)}
      >
        <span className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        <span className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
      </div>
      {showUserOptions && (
        <div className="absolute mt-2 py-4 rounded-lg w-48 shadow-2xl right-28 cursor-pointer bg-black border border-gray-500">
          <div className="flex flex-col text-white">
            {isAuthenticated ? (
              <>
                <span className="mb-2 hover:text-gray-500 px-4">
                  <LogoutButton>Logout</LogoutButton>
                </span>
              </>
            ) : (
              <>
                <span className="mb-2 hover:text-gray-500 px-4">
                  <Link to={"/login"}>Login</Link>
                </span>
                <hr className="h-px my-2 bg-red border-0"></hr>

                <span className="mb-2 hover:text-gray-500 px-4">
                  <Link to={"/signup"}>Signup</Link>
                </span>
              </>
            )}
            <hr className="h-px my-2 bg-red border-0"></hr>
            <span className="hover:text-gray-500 px-4">Settings</span>
          </div>
        </div>
      )}
    </div>
  );
}
