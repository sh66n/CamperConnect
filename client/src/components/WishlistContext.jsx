import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const openWishlist = () => setIsWishlistOpen(true);
  const closeWishlist = () => setIsWishlistOpen(false);

  return (
    <WishlistContext.Provider
      value={{ isWishlistOpen, openWishlist, closeWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
