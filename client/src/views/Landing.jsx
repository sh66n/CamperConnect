import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="min-h-screen h-auto w-100 bg-black text-white flex flex-col">
        <div className="w-full grow flex justify-center items-center">
          <div className="h-96 aspect-square bg-red-100 bg-[url('https://res.cloudinary.com/dkhlgn6zs/image/upload/v1727637012/What_you_need_to_know_before_investing_in_a_VW_camper_van__Katrina_Stewart_Photography_sjxe3t.jpg')] bg-cover rounded-xl mr-8"></div>
          <div className="w-1/4">
            <div className="mb-4">
              <h1 className="font-bold text-3xl text-center">
                Camper<span className="text-red-500">Connect</span>
              </h1>
              <div className="text-red-500 text-center">
                <Typewriter
                  options={{
                    strings: ["Minimalist", "Trek", "Roam", "Wander"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <p className="mb-2">
              A minimalist platform linking campers to outdoor destinations for
              easy, seamless adventures.
            </p>
            <div className="w-full text-center">
              <button className="bg-red-500 m-2 p-2 rounded-sm hover:opacity-50">
                <Link to={"/campgrounds"}>Dive right in</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
