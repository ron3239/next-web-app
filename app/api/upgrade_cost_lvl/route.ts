import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma_cleint";


export async function GET() {
    const upgrade_cost_lvl = await prisma.upgradeLevelCost.findMany();
    return NextResponse.json(upgrade_cost_lvl);
}