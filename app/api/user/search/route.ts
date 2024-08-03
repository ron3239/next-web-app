import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const spisok_user = await prisma.user.findUnique({
      where: {
        id_user: data.id_user,
      },
    });

    // Преобразуем BigInt в строку перед возвратом
    const response = {
      ...spisok_user,
      id_user: spisok_user.id_user.toString(),
    };

    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json([{ error: `Ошибка ${e}` }], { status: 400 });
  }
}
