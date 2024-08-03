import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-cleint";

export async function GET() {
    const spisok_user = await prisma.user.findMany();
    const transformedUsers = spisok_user.map(user => ({
        ...user,
        id_user: user.id_user.toString()
    }));
    return NextResponse.json(transformedUsers);
};