import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";


export async function POST(req: NextRequest) {
    const data = await req.json();
    try {
        const spisok_user = await prisma.user.findUnique({
            where: {
                id_user: BigInt(data.id_user),
            },
        });
        // Преобразование BigInt в строку перед возвратом ответа
        return NextResponse.json({
            spisok_user
            
        });
    } catch (e) {
        return NextResponse.json([{ error: `SEARCH Ошибка ${e}` },{data}], { status: 400 });
    }
}