import React from "react";

export default function Search() {
  return (
    <div className="flex items-center justify-center px-3 py-2 rounded-full border-2 border-white text-white bg-black">
      <div className="mr-2">Where?</div>
      <div className="mr-2">Who?</div>
      <div className="bg-white p-2 rounded-full text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
}
