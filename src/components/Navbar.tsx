"use client";
import SearchIcon from "@/components/ui/SearchIcon";
import Button from "./ui/Button";
import Link from "next/link";
import MoreIcon from "./ui/MoreIcon";

const Navbar = () => {
  return (
    <div className="flex text-blue-950 justify-between items-center py-3 px-3 md:px-12 max-w-[1080px] md:mx-auto">
      <div className="flex gap-6 items-center">
        <Link href="/">
          <div className="text-3xl font-bold">LG</div>
        </Link>
        <SearchIcon />
        <div className="hidden md:flex hover:text-blue-500">
          <Button type="button" name="Explore" />
          <MoreIcon />
        </div>
      </div>

      <div className="flex gap-6">
        <Button
          type="button"
          name="Start free trial"
          className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
        />
        <Link className="flex justify-center" href="/login">
          <Button
            type="button"
            name="Log in"
            className=" hover:text-blue-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
