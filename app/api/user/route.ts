import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma_cleint";


export async function POST(req:NextRequest) {
    const data = await req.json()
    
    const user = await prisma.user.create({
        data
    })

    return NextResponse.json(user);
};
