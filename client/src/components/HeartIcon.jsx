import React, { useState } from "react";
import Heart from "@react-sandbox/heart";
import { toast } from "react-toastify";

export default function HeartIcon({ text }) {
  const [active, setActive] = useState(false);
  const handleHeart = () => {
    setActive(!active);
  };

  return (
    <>
      <Heart
        width={30}
        height={30}
        strokeWidth={50}
        inactiveColor="#ffffff"
        active={active}
        onClick={handleHeart}
      />
      {text && (
        <span className="underline" onClick={handleHeart}>
          {text}
        </span>
      )}
    </>
  );
}
