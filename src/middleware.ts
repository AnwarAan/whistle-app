import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/auth", request.url));

  const res = NextResponse.next();
  return res.cookies.get("token");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/explore"],
};
