import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
	todos: Todo[];
	toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
	return (
		<ul style={{padding: 0}}>
			{todos.map(todo => (
				<TodoListItem
					key={todo.text}
					todo={todo}
					toggleTodo={toggleTodo}
				/>
			))}
		</ul>
	);
};
