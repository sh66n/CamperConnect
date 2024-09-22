import Navbar from "@/components/Navbar";
import NewCampgroundForm from "@/components/NewCampgroundForm";
import React from "react";

export default function NewCampground() {
  return (
    <>
      <div className="min-h-screen h-auto w-100 bg-black">
        <Navbar />
        <NewCampgroundForm />
      </div>
    </>
  );
}
