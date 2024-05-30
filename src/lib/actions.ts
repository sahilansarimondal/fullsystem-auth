"use server";

import prisma from "./prisma";

type CreateFriendsType = {
  friend1: string;
  friend2?: string;
  friend3?: string;
  friend4?: string;
  password: string;
  userEmail: string;
};

export const createFriends = async ({
  friend1,
  friend2,
  friend3,
  friend4,
  password,
  userEmail,
}: CreateFriendsType) => {
  const user = await getUser(userEmail);
  if (!user) {
    throw new Error("User not found");
  }

  if (user.childuser.length > 4) {
    throw new Error("Maximum number of friends reached");
  }
  if (
    !friend1.trim() &&
    !friend2?.trim() &&
    !friend3?.trim() &&
    !friend4?.trim()
  ) {
    throw new Error("Please add at least one friend");
  }

  if (
    friend1.trim() &&
    friend2?.trim() &&
    friend3?.trim() &&
    friend4?.trim()
  ) {
    const data = await prisma.childUser.createMany({
      data: [
        {
          userId: user?.id,
          email: friend1,
          password,
        },
        {
          userId: user?.id,
          email: friend2,
          password,
        },
        {
          userId: user?.id,
          email: friend3,
          password,
        },
        {
          userId: user?.id,
          email: friend4,
          password,
        },
      ],
      skipDuplicates: true,
    });
    return user?.id;
  }

  if (
    friend1.trim() &&
    friend2?.trim() &&
    friend3?.trim() &&
    !friend4?.trim()
  ) {
    const data = await prisma.childUser.createMany({
      data: [
        {
          userId: user?.id,
          email: friend1,
          password,
        },
        {
          userId: user?.id,
          email: friend2,
          password,
        },
        {
          userId: user?.id,
          email: friend3,
          password,
        },
      ],
      skipDuplicates: true,
    });
    return user?.id;
  }
  if (
    friend1.trim() &&
    friend2?.trim() &&
    !friend3?.trim() &&
    !friend4?.trim()
  ) {
    const data = await prisma.childUser.createMany({
      data: [
        {
          userId: user?.id,
          email: friend1,
          password,
        },
        {
          userId: user?.id,
          email: friend2,
          password,
        },
      ],
      skipDuplicates: true,
    });
    return user?.id;
  }

  if (
    friend1.trim() &&
    !friend2?.trim() &&
    !friend3?.trim() &&
    !friend4?.trim()
  ) {
    const data = await prisma.childUser.create({
      data: {
        email: friend1,
        password: password,
        userId: user?.id,
      },
    });
    return user?.id;
  }

  return null;
};

export const getUser = async (email: string) => {
  const data = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: { childuser: true },
  });
  return data;
};

export const markUserAsPaid = async (
  email: string,
  price: string
) => {
  let planName;

  if (price === "9.94") {
    planName = "Starter";
  } else if (price === "15.95") {
    planName = "Professional";
  } else {
    planName = "Business";
  }

  console.log(price, email);
  const data = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      plan: planName,
      isPaid: true,
    },
  });
  return data.isPaid;
};

export const getUserById = async (userId: string) => {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return data;
};
