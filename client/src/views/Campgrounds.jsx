import React from "react";
import CampgroundList from "../components/CampgroundList";
import Navbar from "../components/Navbar";

export default function Campgrounds() {
  return (
    <>
      <div className="h-screen w-100 bg-black">
        <Navbar />
        <CampgroundList />
      </div>
    </>
  );
}
