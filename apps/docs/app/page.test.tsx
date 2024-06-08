/* eslint-disable no-undef */
import { render, fireEvent, screen } from '@testing-library/react';
import Home from './page';

jest.mock('@repo/ui/useTodos', () => ({
  useTodos: () => ({
    todos: [
      { id: 1, description: 'Todo 1', completed: false },
      { id: 2, description: 'Todo 2', completed: true },
    ],
    addTodo: jest.fn(),
    toggleComplete: jest.fn(),
    deleteTodo: jest.fn(),
  }),
}));

describe('Home Component', () => {
  test('renders correctly', () => {
    render(
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>)
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    const { addTodo } = require('@repo/ui/useTodos').useTodos();
    render(<Home />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(addTodo).toHaveBeenCalledWith('New Todo');
  });

  test('toggles todo complete status', () => {
    const { toggleComplete } = require('@repo/ui/useTodos').useTodos();
    render(<Home />);
    fireEvent.click(screen.getByRole('checkbox', { name: /todo 1/i }));
    expect(toggleComplete).toHaveBeenCalledWith(1);
  });

  test('deletes a todo', () => {
    const { deleteTodo } = require('@repo/ui/useTodos').useTodos();
    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(deleteTodo).toHaveBeenCalledWith(1);
  });

  test('filters todos correctly', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('* All'));
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Active'));
    expect(screen.queryByText('Todo 1')).toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Completed'));
    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).toBeInTheDocument();
  });
});
