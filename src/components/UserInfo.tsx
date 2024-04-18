"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface UserInfoProps {
  name?: string;
  email?: string;
  image?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  image,
  name,
  email,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <button
        onClick={() => signOut()}
        className="text-blue-500"
      >
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
