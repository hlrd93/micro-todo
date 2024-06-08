import { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.description}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* New button */}
    </li>
  );
};
