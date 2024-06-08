"use client"
import { useState } from 'react';
import { TodoInput } from "@repo/ui/TodoInput";
import { TodoList } from "@repo/ui/TodoList";
import { useTodos } from "@repo/ui/useTodos";

export default function Home() {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <div>
        <button onClick={() => handleFilterChange('All')}>
          {activeFilter === 'All' ? '* All' : 'All'}
        </button>
        <button onClick={() => handleFilterChange('Active')}>
          {activeFilter === 'Active' ? '* Active' : 'Active'}
        </button>
        <button onClick={() => handleFilterChange('Completed')}>
          {activeFilter === 'Completed' ? '* Completed' : 'Completed'}
        </button>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        filter={activeFilter}
      />
    </div>
  );
}
