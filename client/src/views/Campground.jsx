import ImageGrid from "@/components/ImageGrid";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PriceCard from "@/components/PriceCard";
import HeartIcon from "@/components/HeartIcon";
import Wishlist from "@/components/Wishlist";
import { useWishlist } from "@/components/WishlistContext";
import HostedBy from "@/components/HostedBy";

export default function Campground() {
  const { id } = useParams();
  const [campground, setCampground] = useState(null);
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(false);
  const { isWishlistOpen } = useWishlist();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/campgrounds/${id}`
        );
        const leaderImage = data.leader.slice(0, 1)[0];
        const followerImages = data.followers.slice(0);
        followerImages.splice(0, 1, leaderImage);
        const allImages = followerImages.map((i) => i.url);
        setImages(allImages);
        setCampground(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen h-auto w-full bg-black">
      {isWishlistOpen && <Wishlist />}

      <Navbar />
      {campground && (
        <div className="w-full text-white">
          <div className="flex mx-32 my-4">
            <h1 className=" font-bold text-3xl">{campground.name}</h1>
            <div
              className="flex ml-auto items-center hover:cursor-pointer"
              onClick={() => setActive(!active)}
            >
              <HeartIcon textual={true} currCampground={campground} />
            </div>
          </div>
          <ImageGrid images={images} />
          <div className="flex mx-32">
            <div className="p-4 w-7/12 my-4 ">
              <div className="text-3xl pb-4">{campground.location}</div>
              <div>{campground.description}</div>
              <HostedBy username={campground.author.username} />
            </div>
            <div className="py-4 pr-2 flex w-5/12 justify-end">
              <PriceCard pricePerNight={campground.price} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
