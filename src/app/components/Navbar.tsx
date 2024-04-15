"use client";
import SearchIcon from "@/app/components/ui/SearchIcon";
import Button from "./ui/Button";
import Link from "next/link";
import MoreIcon from "./ui/MoreIcon";

const Navbar = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="flex text-blue-950 justify-between items-center py-3 px-12 max-w-[1080px] md:mx-auto">
      <div className="flex gap-6 items-center">
        <Link href="/">
          <div className="text-3xl font-bold">LG</div>
        </Link>
        <SearchIcon />
        <div className="hidden md:flex hover:text-green-400">
          <Button name="Explore" />
          <MoreIcon />
        </div>
      </div>

      <div className="flex gap-6">
        <Button
          name="Start free trial"
          className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
        />
        <Button
          onClick={handleClick}
          name="Log in"
          className=" hover:text-green-400"
        />
      </div>
    </div>
  );
};

export default Navbar;
