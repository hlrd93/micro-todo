import { useState, useEffect } from 'react';
import { getTodosFromStorage, saveTodosToStorage } from '../utils/localStorage';
import { Todo } from "../types/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = getTodosFromStorage();
    if (storedTodos) setTodos(storedTodos);
  }, []);

  const addTodo = (description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    saveTodosToStorage([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    let newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(newTodos);
    saveTodosToStorage(newTodos);
  };

  const deleteTodo = (id: number) => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
    saveTodosToStorage(newTodos)
  };

  return { todos, addTodo, toggleComplete, deleteTodo };
};
