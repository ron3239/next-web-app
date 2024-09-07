import { NextRequest,NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";


export async function POST(req:NextRequest) {
    const data = await req.json()

    const res = await prisma.upgrade.findUnique({
        where:{
            id:data.id,
        },
    });
    const userStringified = JSON.parse(JSON.stringify(res, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    ));

    return NextResponse.json({
        user: userStringified
    });
}