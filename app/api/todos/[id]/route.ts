import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const data = await request.json();
    const { text, completed } = data;

    if (completed !== undefined && typeof completed !== 'boolean') {
        return NextResponse.json({ error: "'completed' deve ser um valor booleano" }, { status: 400 });
    }

    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
        return NextResponse.json({ error: `Tarefa com id ${id} não encontrada` }, { status: 404 });
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: {
            text: text !== undefined ? text : todo.text,
            completed: completed !== undefined ? completed : todo.completed,
        },
    });

    return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) {
        return NextResponse.json({ error: `Tarefa com id ${id} não encontrada` }, { status: 404 });
    }

    await prisma.todo.delete({ where: { id } });

    return NextResponse.json({ message: `Tarefa com id ${id} deletada com sucesso` });
}