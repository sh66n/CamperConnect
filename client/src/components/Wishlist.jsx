import React, { useEffect, useRef, useState } from "react";
import { useWishlist } from "./WishlistContext";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import CampgroundCard from "./CampgroundCard";

export default function Wishlist() {
  const wishlistRef = useRef();
  const { isWishlistOpen, closeWishlist } = useWishlist();
  const currUser = useAuthUser();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  const [wishlistedCamps, setWishlistedCamps] = useState([]);

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

  useEffect(() => {
    if (!currUser) return navigate("/login");
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/${currUser.id}/wishlist`,
          {
            headers: {
              Authorization: authHeader,
            },
          }
        );
        setWishlistedCamps(data);
      } catch (e) {
        toast.error("Something went wrong", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wishlist min-h-screen h-full w-full backdrop-blur-md	flex justify-center items-center text-white z-50 fixed">
      <div className="h-12 aspect-square flex justify-center items-center absolute top-4 right-4 rounded-md hover:bg-gray-500">
        <button onClick={closeWishlist}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        ref={wishlistRef}
        className="bg-black rounded-xl border border-gray-700 p-4 aspect-square h-5/6 flex flex-col text-center"
      >
        <div className="my-4 mb-11 text-3xl">
          My <span className="text-red-500"> Wishlist </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
            />
          </svg>
        </div>
        <div className="grow grid grid-cols-3 overflow-auto">
          {wishlistedCamps.map((camp) => (
            <CampgroundCard camp={camp} key={camp._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
