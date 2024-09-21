import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import UserOptions from "./UserOptions";
import Search from "./Search";

export default function Navbar({ current }) {
  return (
    <div className="flex  h-20 w-100 items-center sticky top-0">
      <div className="inline">
        <NavItem>
          <Link to={"/"}>CamperConnect</Link>
        </NavItem>
      </div>
      <div className=" ml-auto">
        <NavItem>
          <Search />
        </NavItem>
      </div>
      <div className="inline ml-auto mr-9">
        <NavItem>
          <UserOptions />
        </NavItem>
      </div>
    </div>
  );
}
