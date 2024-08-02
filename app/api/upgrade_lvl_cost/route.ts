import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma_cleint";


export async function GET() {
    const res = await prisma.upgradeLevelCost.findMany()
    return NextResponse.json(res)
}