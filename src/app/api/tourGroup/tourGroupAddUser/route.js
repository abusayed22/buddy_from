import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// add user by auth in tour group
export async function POST(req, res) {
  try {
    const reqData = await req.json();
    const prisma = new PrismaClient();

    // headers items
    const headerList = headers();
    // const userId = parseInt(headerList.get("id"));
    const userEmail = headerList.get("email");

    const result = await prisma.allow_Users.create({
        data: {
            email: reqData["email"],
            tour_group_id: reqData['tourGroupId']
        }
    })

    return NextResponse.json({status: 'successfully!',data: result})

  } catch (error) {
    console.log(error)
    return NextResponse.json({status: 'fail!',data: error})

  }
}
