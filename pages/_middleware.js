import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleWare(req) {
  //token exist if the user is logged in
  const token = await getToken({ req, secret: "some_super_secret_value" });

  const { pathname } = req.nextUrl;

  //if token exist and user access login page redirect to home-page
  if (token && pathname.includes("/login")) {
    console.log("HAVE TOKEN");
    // return NextResponse.redirect("http://localhost:3000/");
    // return NextResponse.redirect("https://spotify-2-phi.vercel.app/");
    return NextResponse.redirect(process.env.NEXTAUTH_URL);
  }

  //if pathname include api/auth next
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //if no token redirect back to login
  if (!token) {
  //   return NextResponse.rewrite("http://localhost:3000/login");
    // return NextResponse.rewrite("https://spotify-2-phi.vercel.app/login");
    return NextResponse.rewrite(`${process.env.NEXTAUTH_URL}/login`);
  }
}
