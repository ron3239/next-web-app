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

        // Преобразование всех BigInt в строку перед возвратом ответа
        const userStringified = JSON.parse(JSON.stringify(user, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value
        ));

        return NextResponse.json({
            user: userStringified
        });
    } catch (e) {
        return NextResponse.json([
            { error: `SEARCH Ошибка ${e}` },
            { data },
            {
                client: typeof(data.id_user),
                num: data.id_user
            },
            {
                server: BigInt(data.id_user).toString(),
            }
        ], { status: 400 });
    }
}