import React, { useEffect, useState } from "react";
import axios from "axios";
import Campground from "./Campground";

export default function CampgroundList() {
  const [campgrounds, setCampgrounds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/campgrounds`
        );
        setCampgrounds(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {campgrounds.map((camp) => {
        return <Campground key={camp._id} name={camp.name} />;
      })}
    </div>
  );
}
