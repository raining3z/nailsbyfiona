import Link from 'next/link';
import Card from './Card';
import { TodoDto } from '@/dtos/Todo.dto';

interface TodoProps {
  todo: TodoDto;
}

export default function Todo({ todo }: TodoProps) {
  const date = new Date(todo.dateAdded);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return (
    <Card>
      <Link href={`/todos/${todo.id}`}>{todo.title}</Link>

      <div>Added: {formattedDate}</div>
      <div>Priority: {todo.priority}</div>
      <div>Status: {todo.completed ? 'Completed' : 'In Progress'}</div>
      <div>Assigned To: {todo.assignedTo}</div>
      <div>
        <label htmlFor={`completed-${todo.id}`}>Completed?</label>
        <input
          type="checkbox"
          id={`completed-${todo.id}`}
          defaultChecked={todo.completed}
        />
      </div>
    </Card>
  );
}
