"use client";

import {useEffect, useState} from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [colorMode, setColorMode] = useState('🌚');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    if (colorMode === '🌝') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [colorMode]);

  return (
      <div className="container mx-auto p-4 max-w-md relative">
        <div
            className="absolute p-4 right-4 cursor-pointer"
            onClick={() => setColorMode((prevState) => prevState === '🌚' ? '🌝' : '🌚')}
        >
          {colorMode}
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
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder={todos.length === 0 ? "ex.: aprender next.js" : "ex.: outra tarefa"}
                  onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              />
              <Button onClick={addTodo}>Adicionar</Button>
            </div>
            <ul className="space-y-2">
              {todos.map(todo => (
                  <li key={todo.id} className="flex items-center space-x-2">
                    <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                        id={`todo-${todo.id}`}
                    />
                    <label
                        htmlFor={`todo-${todo.id}`}
                        className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                      {todo.text}
                    </label>
                    <Button variant="destructive" size="sm" onClick={() => deleteTodo(todo.id)}>
                      Deletar
                    </Button>
                  </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
  );
}