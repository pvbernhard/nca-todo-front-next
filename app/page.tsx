"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export default function Home() {
  return (
      <div className="container mx-auto p-4 max-w-md relative">
        <div className="absolute p-4 right-4 cursor-pointer">
          🌚
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center justify-center">
              ✍️ Lista de Tarefas
            </CardTitle>
            <CardTitle className="text-xl font-bold flex items-center justify-center">
              O que você quer fazer? 🤔
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 mb-4">
              <Input
                  type="text"
                  placeholder="ex.: aprender next.js"
              />
              <Button>Adicionar</Button>
            </div>
            <ul className="space-y-2">
              <li key={1} className="flex items-center space-x-2">
                <Checkbox
                    id="todo-1"
                />
                <label
                    htmlFor="todo-1"
                    className="flex-grow"
                >
                  Texto
                </label>
                <Button variant="destructive" size="sm">
                  Deletar
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
  );
}