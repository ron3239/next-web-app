import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";

export async function POST(req:NextRequest) {
    const data = await req.json()
    try{
    const spisok_user = await prisma.user.findUnique({
        where:{
            id_user:data.id_user
        }
    });
    return NextResponse.json(spisok_user);
}catch(e){
    return NextResponse.json([{error:`Ошибка ${e}`},{data}],{status:300});
}

};

