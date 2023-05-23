import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
const PUBLIC_FILE = /\.(.*)$/;
const verifyJWT = async (jwt) => {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
  
    return payload;
  };
export default async function middleware(req:NextRequest){
    const {pathname} = req.nextUrl;
     
    if (

        pathname.startsWith("/_next") ||
        // pathname.startsWith("/api") ||
        pathname.startsWith("/static") ||
        pathname.startsWith("/signin") ||
        pathname.startsWith("/register") ||
        PUBLIC_FILE.test(pathname)
      ) {
        
        return NextResponse.next();
      }

    const jwt = req.cookies.get(process.env.COOKIE_NAME);
    console.log(jwt)
    if(!jwt){
      const url = req.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.rewrite(url)
    }
    try{
        await verifyJWT(jwt.value)
        console.log(121212)
        return NextResponse.next();
    } catch{
      const url = req.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.rewrite(url)
    }
    
}
