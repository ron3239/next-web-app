import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";


export async function POST(req: NextRequest) {
    const data = await req.json();
    try {
        const user = await prisma.user.findUnique({
            where: {
                id_user: BigInt(data.id_user),
            },
        });
        // Преобразование BigInt в строку перед возвратом ответа
        return NextResponse.json({
            user
            
        });
    } catch (e) {
        return NextResponse.json([{ error: `SEARCH Ошибка ${e}` },
            {data},
            {
                client:typeof(data.id_user),
                num:data.id_user
            },
            {
                server:typeof(BigInt(data.id_user)),
            }
        ], { status: 400 });
    }
}