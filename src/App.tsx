import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Todo[] = [
	{
		text: 'Feed the cat',
		complete: false,
	},
	{
		text: 'Wash up',
		complete: true,
	},
];

function App() {
	return (
		<ul>
			<TodoListItem todo={todos[0]} />
			<TodoListItem todo={todos[1]} />
		</ul>
	);
}

export default App;
