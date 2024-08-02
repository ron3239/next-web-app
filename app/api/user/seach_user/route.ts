import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma_cleint";


export async function POST(req: NextRequest) {
    const data = await req.json();
    try {
        const user = await prisma.user.findUnique({
            where: {
                id_user: data,
            },
        });
        return NextResponse.json(user);  // Возвращаем найденного пользователя
    } catch (error) {
        console.error('Ошибка при поиске пользователя:', error);
        return NextResponse.json({ error: 'Ошибка при поиске пользователя' }, { status: 500 });
    }
}



