import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
}

export async function POST(request: Request) {
    const data = await request.json();
    const { text, completed } = data;

    if (!text || typeof text !== 'string' || text.trim() === '') {
        return NextResponse.json({ error: "O campo 'text' é obrigatório e não pode ser vazio" }, { status: 400 });
    }

    if (completed && typeof completed !== 'boolean') {
        return NextResponse.json({ error: "O campo 'completed' deve ser um valor booleano" }, { status: 400 });
    }

    const newTodo = await prisma.todo.create({
        data: { text: text.trim(), completed: completed ?? false },
    });

    return NextResponse.json(newTodo, { status: 201 });
}