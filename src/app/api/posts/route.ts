import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      name
    } = await req.json();

    const newData = await prisma.post.create({
      data: {
        name
      }
    });

    return NextResponse.json(newData, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
}