import React, { useState } from "react";
import CampgroundList from "../components/CampgroundList";
import Navbar from "../components/Navbar";
import { useWishlist } from "@/components/WishlistContext";
import Wishlist from "@/components/Wishlist";

export default function Campgrounds() {
  const { isWishlistOpen } = useWishlist();
  return (
    <>
      <div className="min-h-screen h-auto w-100 bg-black">
        {isWishlistOpen && <Wishlist />}
        <Navbar />
        <CampgroundList />
      </div>
    </>
  );
}
