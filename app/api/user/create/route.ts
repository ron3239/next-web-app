import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";

export async function POST(req:NextRequest) {
    const data = await req.json()
    try{
        const spisok_upgrade = await prisma.user.create({
        data
        });
        return NextResponse.json(spisok_upgrade);
}catch(e){
    return NextResponse.json([{error:`Ошибка ${e}`},],{status:300});
}

};