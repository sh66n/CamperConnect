import React, { useEffect } from "react";

export default function ImageGrid({ images }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-5/6 justify-center content-center">
        <div
          className="w-1/2 aspect-video m-2 mr-0 bg-cover rounded-tl-3xl rounded-bl-3xl"
          style={{ backgroundImage: "url(" + images[0] + ")" }}
        ></div>
        <div className="w-1/2 grid grid-cols-2 grid-rows-2">
          <img src={images[1]} alt="" className="p-2 pb-1 pr-1" />
          <img src={images[2]} className="p-2 pb-1 pl-1 rounded-tr-3xl" />
          <img src={images[3]} alt="" className="p-2 pt-1 pr-1" />
          <img src={images[4]} className="p-2 pt-1 pl-1 rounded-br-3xl" />
        </div>
      </div>
    </div>
  );
}
