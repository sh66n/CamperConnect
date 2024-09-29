import Navbar from "@/components/Navbar";
import NewCampgroundForm from "@/components/NewCampgroundForm";
import React from "react";
import Wishlist from "@/components/Wishlist";
import { useWishlist } from "@/components/WishlistContext";

export default function NewCampground() {
  const { isWishlistOpen } = useWishlist();
  return (
    <>
      <div className="min-h-screen h-auto w-100 bg-black">
        {isWishlistOpen && <Wishlist />}
        <Navbar />
        <NewCampgroundForm />
      </div>
    </>
  );
}
