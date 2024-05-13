import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// create tourGroup with allow user with auth
export async function POST(req, res) {
  try {
    const headerList = headers();
    const userId = parseInt(headerList.get("id"));
    const userEmail = headerList.get("email");
    const prisma = new PrismaClient();

    let reqData = await req.json();
    // reqData["admin"] = userEmail;
    // reqData["user_id"] = userId;

    const result = await prisma.tourGroup.create({
      data: {
        name: reqData["name"],
        status: reqData["status"],
        admin: userEmail,
        user_id: userId,
        allow_Users: {
          create: {
            email: userEmail,
          },
        },
      },
      include: {
        allow_Users: true,
      },
    });

    return NextResponse.json({ status: "successfully", data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", error: error.toString() });
  }
}

// get all tour group by auth
export async function GET(req, res) {
  try {
    // get from headers
    const headerList = headers();
    const userId = parseInt(headerList.get("id"));
    const userEmail = headerList.get("email");

    const prisma = new PrismaClient();

    const result = await prisma.allow_Users.findMany({
        where:{
            email: userEmail
        },
        include: {
            tourGroup: true
        }

    })


    return NextResponse.json({status: 'success',data: result})

  } catch (error) {
    return NextResponse.json({status: "fail",error: error})
  }
}
