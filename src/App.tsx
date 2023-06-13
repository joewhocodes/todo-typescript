import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
	{
		text: 'Feed the cat',
		complete: false,
	},
	{
		text: 'Learn Typescript',
		complete: true,
	},
];

function App() {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map(todo => {
			if (todo == selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: AddTodo = (text: string) => {
		const newTodo = { text, complete: false };
		setTodos([...todos, newTodo]);
	};

	return (
		<div style={{display: 'flex', justifyContent: 'center', paddingTop: '150px'}}>
            <div>
                <h2 style={{paddingBottom: '15px'}}>Todo List</h2>
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <AddTodoForm addTodo={addTodo} />
            </div>
        </div>
	);
}

export default App;
