import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { createJWT, hashPassword, comparePasswords} from "@/lib/auth";
import { serialize } from "cookie";
export async function POST(req:NextRequest) {
     const body = await req.json();
     const user = await db.user.findUnique({
        where:{
            email: body.email,
        }
     })
     const isValidePassword = comparePasswords(body.password, user?.password)
     if(isValidePassword){
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
     } else{
        return new Response('tokenError',{
            status:401
        })
     }
}