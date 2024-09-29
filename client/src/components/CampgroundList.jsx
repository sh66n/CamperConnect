import React, { useEffect, useState } from "react";
import axios from "axios";
import CampgroundCard from "./CampgroundCard";
import { Skeleton } from "@/components/ui/skeleton";
import Wishlist from "../components/Wishlist";

export default function CampgroundList({ toggleWishList }) {
  const [campgrounds, setCampgrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCampgroundsEmpty, setIsCampgroundEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/campgrounds`
        );
        setCampgrounds(data);
        if (data.length <= 0) setIsCampgroundEmpty(true);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="ml-24 mr-24 grid grid-cols-4">
        {isLoading ? (
          <>
            <Skeleton className="w-96 h-96 bg-gray-900 mx-2" />
          </>
        ) : (
          campgrounds.map((camp) => {
            return <CampgroundCard key={camp._id} camp={camp} />;
          })
        )}
      </div>
      {isCampgroundsEmpty && (
        <div className="w-full h-max mt-40 flex flex-col justify-center items-center">
          <div className="h-72 aspect-square bg-[url('https://res.cloudinary.com/dkhlgn6zs/image/upload/fl_preserve_transparency/v1727628820/Owen_Pomery_-_AIRBNB-removebg-preview_k58kz7.jpg?_s=public-apps')] bg-cover"></div>
          <span className="text-white">No campgrounds yet.</span>
        </div>
      )}
    </>
  );
}
