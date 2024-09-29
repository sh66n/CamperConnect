import React, { useEffect, useState } from "react";
import Heart from "@react-sandbox/heart";
import { toast } from "react-toastify";
import axios from "axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useNavigate } from "react-router-dom";

export default function HeartIcon({ currCampground, textual }) {
  const currUser = useAuthUser();
  const authHeader = useAuthHeader();
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchActive = async () => {
      if (currUser) {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/${currUser.id}/wishlist`,
          {
            headers: {
              Authorization: authHeader,
            },
          }
        );
        for (const campground of data) {
          if (campground._id === currCampground._id) setActive(true);
        }
      }
    };
    fetchActive();
  }, []);

  const handleHeart = async () => {
    if (!currUser) return navigate("/login");
    try {
      if (!active) {
        //meaning we have to add the campground to the wishlist

        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/${currUser.id}/wishlist`,
          {
            campground: currCampground,
          },
          {
            headers: {
              Authorization: authHeader,
            },
          }
        );
        toast.success("Added to your wishlist!", {
          position: "bottom-right",
          theme: "dark",
        });
      } else {
        //meaning we have to remove the campground from the wishlist

        const { data } = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/users/${currUser.id}/wishlist/${
            currCampground._id
          }`,
          {
            headers: {
              Authorization: authHeader,
            },
          }
        );
        toast.success("Removed from your wishlist!", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    } catch (e) {
      toast.error("Something went wrong!", {
        position: "bottom-right",
      });
    }
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
      {textual && (
        <span className="underline" onClick={handleHeart}>
          Save
        </span>
      )}
    </>
  );
}
