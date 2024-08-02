import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma_cleint";



export async function create_user(req:NextRequest) {
    const data = await req.json()
    try{
        const user = await prisma.user.create({
            data
        })
    
        return NextResponse.json(user);
    }catch{
        return NextResponse.json({ error: 'Error create user' }, { status: 500 });
    }
    
};