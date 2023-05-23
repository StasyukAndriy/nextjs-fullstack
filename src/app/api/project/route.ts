import { db } from "@/lib/db";
import { NextRequest } from "next/server";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
export async function POST(req:NextRequest,res){
      const project = await req.json()
      const user = await getUserFromCookie(cookies())
      await db.project.create({
        data:{
            name: project.name,
            ownerId: user.id
        }
      })
      res.json({ data: { message: "ok" } });
}