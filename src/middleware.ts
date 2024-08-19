import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, res: NextResponse) {
  const token = request.cookies.get("whistle_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/home", request.url));
  NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/explore"],
};
