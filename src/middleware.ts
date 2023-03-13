// import SessionStorage from "@/common/SessionStorage/SessionStorage";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// export default function middleware(
//   request: NextRequest,
//   event: NextFetchEvent
// ) {
//   const token = SessionStorage.getToken();
//   const url = request.url;
//   console.log(url);
//   console.log(token);

//   if (url.includes("/signup")) {
//     if (!token || token == "undefined") {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//     return NextResponse.next();
//   }
//   return NextResponse.next();
// }

export default function middleware() {
  return;
}
