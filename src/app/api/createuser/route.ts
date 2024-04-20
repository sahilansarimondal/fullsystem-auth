import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log({ email, password });

    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // check if user already exists

    const updateUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: hashedPassword,
      },
    });
    if (updateUser) {
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
