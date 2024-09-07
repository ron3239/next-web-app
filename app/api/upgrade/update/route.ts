import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";


export async function POST(req: NextRequest) {
    const data = await req.json();
    try {
        const user = await prisma.userUpgrade.updateMany({
            where: {
                userId: BigInt(data.id_user),
                upgradeId:data.upgradeId
            },
            data:{
                currentLevel:{increment: 1,}
            }
    });
        return NextResponse.json(user);
    } catch (e) {
        console.error(e)}}