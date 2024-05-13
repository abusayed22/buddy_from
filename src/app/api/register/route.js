import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { CreateToken } from "@/utilities/TokenHelper";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let dataObj = await req.json();
    dataObj["otp"] = "0";

    const result = await prisma.users.create({
      data: dataObj,
    });

    // TODO:token
    if (result !== null) {
      const token = await CreateToken(result["email"], result["id"]);
      const expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cokiesString = `token=${token}; expires=${expirationTime.toUTCString()};path=/`;

      return NextResponse.json(
        { status: "Register Successfully", data: token },
        { status: 200, headers: { "set-cookie": cokiesString } }
      );
    }

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: "fail", error: e.toString() });
  }
}
