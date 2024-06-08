import { Todo } from "../types/Todo";

export const getTodosFromStorage = (): Todo[] => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
};

export const saveTodosToStorage = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};