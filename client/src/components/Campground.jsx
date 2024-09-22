import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

export default function Campground({ camp }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${camp._id}`);
  };

  return (
    <div className="w-1/4 h-1/4 inline-block rounded-lg mx-2 cursor-pointer">
      <Carousel className="w-full h-full mb-2 relative">
        <CarouselContent className="">
          {camp.thumbnail.map((i) => {
            return (
              <CarouselItem onClick={handleClick}>
                <img src={i.url} alt="image" className="rounded-lg bg-cover" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute h-16 w-16 right-0 top-0 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>

        <CarouselPrevious className="bg-red-500 border-0 hover:bg-red-600" />
        <CarouselNext className="bg-red-500 border-0 hover:bg-red-600" />
      </Carousel>
      <div className="text-white px-2" onClick={handleClick}>
        <div className="text-xl font-bold">{camp.location}</div>
        <div className="text-gray-500">{camp.description}</div>
        <div>
          <span className="text-red-500 font-bold">₹{camp.price}</span>{" "}
          <span className="text-gray-300">night</span>
        </div>
      </div>
    </div>
  );
}
