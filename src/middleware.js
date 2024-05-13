"use server";

import { NextResponse } from "next/server";
import { Decode } from "./utilities/TokenHelper";

export async function middleware(req, res) {
  try {
    const token = req.cookies.get("token");
    const payload = await Decode(token["value"]); // TODO: value
    // console.log("token" + payload)

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    requestHeader.set("id", payload["id"]);
    // console.log(payload['email'])

    return NextResponse.next({
      headers: requestHeader,
    });
  } catch (error) {
    // if no cokies ,so redirect frontend
    if (req.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { status: "fail", data: error },
        { status: 401 }
      );
    } else {
      return NextResponse.redirect(new URL("/login"));
    }
  }
}

export const config = {
  matcher: [
    "/api/history/:path*",
    "/api/tourGroup/:path*",
    "/api/expense/:path*",
]
};
