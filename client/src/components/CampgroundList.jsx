import React, { useEffect, useState } from "react";
import axios from "axios";
import Campground from "./Campground";
import { Skeleton } from "@/components/ui/skeleton";
import { ShieldAlertIcon } from "lucide-react";

export default function CampgroundList() {
  const [campgrounds, setCampgrounds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/campgrounds`
        );
        setCampgrounds(data);
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
      <div className="ml-12 mr-12 grid grid-cols-5">
        {isLoading ? (
          <>
            <Skeleton className="w-96 h-96 bg-gray-900 mx-2" />
          </>
        ) : (
          campgrounds.map((camp) => {
            return <Campground key={camp._id} camp={camp} />;
          })
        )}
      </div>
    </>
  );
}
