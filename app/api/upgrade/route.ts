import { prisma } from "../../../prisma/prisma_cleint";
import { NextResponse } from "next/server";

export async function GET() {
    const spisok_upgrade = await prisma.upgrade.findMany();
    return NextResponse.json(spisok_upgrade);
};
