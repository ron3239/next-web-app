import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-cleint";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const result = await prisma.user.findMany({
      where: {
        id_user: BigInt(data.id_user),
      }
    });
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: `Ошибка обновления пользователя: ${e.message}` }, { status: 500 });
  }
}