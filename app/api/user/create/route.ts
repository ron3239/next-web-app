import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";


export async function POST(req: NextRequest) {
    const sdata = await req.json();
    try {
        const user = await prisma.user.create({
            data: {
                id_user: BigInt(sdata.id_user),
                username: sdata.username,
                last_update_time: sdata.last_update_time,
            },
        });
        // Преобразование BigInt в строку перед возвратом ответа
        return NextResponse.json({
            ...user,
            id_user: user.id_user.toString(),
        });
    } catch (e) {
        return NextResponse.json([{ error: `Ошибка ${e}` },{sdata},], { status: 400 });
    }
}