import { NextRequest,NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-cleint";


export async function POST(req:NextRequest) {
    const data = await req.json()
    const res = await prisma.upgradeLevelCost.findFirst({
        where:{
            upgradeId:data.upgradeId,
            level:data.level
        },
    });
    
    return NextResponse.json(res);
}