import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import UserOptions from "./UserOptions";
import Search from "./Search";

export default function Navbar({ current }) {
  return (
    <div className="flex h-20 w-100 items-center sticky top-0 ml-24 z-50 backdrop-blur-sm">
      <div className="inline">
        <NavItem>
          <Link to={"/campgrounds"} className="text-white font-bold text-3xl">
            Camper<span className="text-red-500">Connect</span>
          </Link>
        </NavItem>
      </div>
      <div className="ml-auto">
        <NavItem>
          <Search />
        </NavItem>
      </div>
      <div className="flex content-center inline ml-auto mr-24">
        <NavItem>
          <button className="p-2 bg-white text-black rounded-full font-bold">
            <Link to={"/campgrounds/new"}>Add campground</Link>
          </button>
        </NavItem>
        <NavItem>
          <UserOptions />
        </NavItem>
      </div>
    </div>
  );
}
