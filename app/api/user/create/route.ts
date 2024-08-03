import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";


export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const user = await prisma.user.create({
      data,
    });

    // Преобразуем BigInt в строку перед возвратом
    const response = {
      ...user,
      id_user: user.id_user.toString(),
    };

    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: `Ошибка ${e.message}` }, { status: 500 });
  }
}
