import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-cleint";


export async function GET() {
    try{
        const spisok_user = await prisma.user.findUnique({
            where:{
                id_user:5
            }
        });
        return NextResponse.json(spisok_user);
    }catch(e){
        return NextResponse.json([{error:`Ошибка ${e}`},{}],{status:300});
    }
    
}