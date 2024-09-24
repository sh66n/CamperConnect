import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Heart from "@react-sandbox/heart";

export default function Campground() {
  const { id } = useParams();
  const [campground, setCampground] = useState({});
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/campgrounds/${id}`
        );
        setImages(
          data.images.map((i) => {
            return i.url;
          })
        );
        setCampground(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen h-auto w-100 bg-black">
      <Navbar />
      <div className="w-full flex justify-center mt-4 mb-4 pl-8 pr-8">
        <h1 className="w-5/6 text-white font-bold text-3xl">
          {campground.name}
        </h1>
        <Heart
          width={30}
          height={30}
          strokeWidth={50}
          inactiveColor="#ffffff"
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
      <ImageGrid images={images} />
    </div>
  );
}
