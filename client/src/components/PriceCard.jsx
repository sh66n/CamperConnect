import React from "react";
import CheckInOut from "./CheckInOut";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function PriceCard({ pricePerNight }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/campgrounds");
    toast.success("Reserved successfully", {
      position: "bottom-right",
    });
  };

  return (
    <div className="bg-black h-max my-4 text-white rounded-xl p-4 w-5/6 border border-gray-500">
      <div className="text-xl font-bold mb-2">₹{pricePerNight} night</div>
      <CheckInOut />
      <button
        className="bg-red-500 w-full p-3 my-2 rounded-md hover:opacity-75"
        onClick={handleClick}
      >
        Reserve
      </button>
      <div className="text-center text-gray-500">
        <span>You wont be charged yet</span>
      </div>
    </div>
  );
}
