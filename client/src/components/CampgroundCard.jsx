import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import HeartIcon from "./HeartIcon";

export default function Campground({ camp }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${camp._id}`);
  };

  return (
    <div className="h-1/3 inline-block rounded-lg mx-2 cursor-pointer mb-4">
      <Carousel className="aspect-square mb-2 relative">
        <CarouselContent className="">
          {camp.thumbnail.map((i) => {
            return (
              <CarouselItem>
                <img src={i.url} alt="image" className="rounded-lg bg-cover" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute h-16 w-16 right-0 top-0 flex justify-center items-center">
          <HeartIcon currCampground={camp} textual={false} />
        </div>

        <CarouselPrevious className="bg-red-500 border-0 hover:bg-red-600" />
        <CarouselNext className="bg-red-500 border-0 hover:bg-red-600" />
      </Carousel>
      <div className="text-white px-2 mb-1">
        <div
          className="text-xl font-bold hover:underline"
          onClick={handleClick}
        >
          {camp.location}
        </div>
        <div
          className="text-gray-500"
          style={{
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
          }}
        >
          {camp.description}
        </div>
        <div>
          <span className="text-red-500 font-bold">₹{camp.price}</span>{" "}
          <span className="text-gray-300">night</span>
        </div>
      </div>
    </div>
  );
}
