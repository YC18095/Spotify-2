import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleWare(req) {
  //token exist if the user is logged in
  const token = await getToken({ req, secret: "some_super_secret_value" });

  const { pathname } = req.nextUrl;

  //if token exist and user access login page redirect to home-page
  if (token && pathname.includes("/login")) {
    console.log("HAVE TOKEN");
    return NextResponse.redirect("http://localhost:3000/");
  }

  //if pathname include api/auth next
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //if no token redirect back to login
  if (!token) {
    return NextResponse.rewrite("http://localhost:3000/login");
  }
}
