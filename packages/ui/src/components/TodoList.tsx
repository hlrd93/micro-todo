import { TodoItem } from './TodoItem';
import { Todo } from "../types/Todo";

type Props = {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  filter: string;
};

export const TodoList: React.FC<Props> = ({ todos, toggleComplete, deleteTodo, filter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') {
      return !todo.completed;
    } else if (filter === 'Completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo} // Pass down deleteTodo function
        />
      ))}
    </ul>
  );
};
