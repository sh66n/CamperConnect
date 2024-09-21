import React from "react";
import CampgroundList from "../components/CampgroundList";
import Navbar from "../components/Navbar";

export default function Campgrounds() {
  return (
    <>
      <div className="h-screen w-100">
        <Navbar />
        <CampgroundList />
      </div>
      <div className="h-screen w-100"></div>
    </>
  );
}
