import React, { useEffect, useRef, useState } from "react";
import { useWishlist } from "./WishlistContext";

export default function Wishlist() {
  const wishlistRef = useRef();
  const { isWishlistOpen, closeWishlist } = useWishlist();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
        closeWishlist();
        document.body.style.overflow = "auto";
      }
    };

    if (isWishlistOpen) {
      document.body.style.overflow = "visible";
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWishlistOpen, closeWishlist]);

  return (
    <div className="wishlist min-h-screen h-full w-full backdrop-blur-sm	flex justify-center items-center text-white z-50 fixed">
      <span ref={wishlistRef}>Wishlist</span>
    </div>
  );
}
