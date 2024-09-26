import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CheckInOut() {
  const [date, setDate] = useState(new Date());
  const [isCalendarShown, setIsCalendarShown] = useState(false);

  return (
    <div className="flex flex-col my-2">
      <div className="grid grid-cols-2">
        <button
          className="flex flex-col justify-center p-2 rounded-tl-md border border-gray-400 hover:opacity-50 "
          onClick={() => setIsCalendarShown((currState) => !currState)}
        >
          <span className="text-xs">CHECK-IN</span>
          <span className="text-gray-400">Add date</span>
        </button>

        <button className="flex flex-col justify-center p-2 rounded-tr-md border hover:opacity-50">
          <span className="text-xs">CHECKOUT</span>
          <span className="text-gray-400 ">Add date</span>
        </button>
      </div>
      <button className="flex flex-col justify-center p-2 rounded-b-md border hover:opacity-50">
        <span className="text-xs">GUESTS</span>
        <span className="text-gray-400">1 guest</span>
      </button>
    </div>
  );
}
