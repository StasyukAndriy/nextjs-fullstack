import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { createJWT, hashPassword } from "@/lib/auth";
import { serialize } from "cookie";
export async function POST(request: NextRequest) {
   const body = await request.json()
   const user = await db.user.create({
      data:{
        firstName: body.firstName,
        lastName: body.lastName,
        email:body.email,
        password: await hashPassword(body.password)
      }
   });
   const jwt = await createJWT(user)
   return new Response('OK',{
      status:201,
      headers:{
        "Set-Cookie": serialize(process.env.COOKIE_NAME, jwt, {
          httpOnly:true,
          path:'/',
          maxAge: 60 * 60 * 24 * 7,
        })
      }
   })
}
