import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-cleint";

export async function GET() {
    const spisok_upgrade = await prisma.user.findMany();
    return NextResponse.json(spisok_upgrade);
};
