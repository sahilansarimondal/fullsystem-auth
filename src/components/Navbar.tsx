"use client";
import { signOut, useSession } from "next-auth/react";
import Button from "./ui/Button";
import Link from "next/link";

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className="flex text-blue-950 justify-between items-center py-3 px-3 md:px-12 max-w-[1080px] md:mx-auto">
      <div className="flex gap-6 items-center">
        <Link href="/">
          <div className="text-3xl font-bold">LOG0</div>
        </Link>
      </div>

      {status === "authenticated" ? (
        <div className="flex gap-6">
          <Button
            type="button"
            name="Log out"
            className=" hover:text-blue-500"
            onClick={() => signOut()}
          />
        </div>
      ) : (
        <div className="flex gap-6">
          <Link
            className="flex justify-center"
            href="/login"
          >
            <Button
              type="button"
              name="Log in"
              className=" hover:text-blue-500"
            />
          </Link>
          <Link href={"/signup"}>
            <Button
              type="button"
              name="Get Started"
              className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
