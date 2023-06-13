import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
	return (
		<>
			<ListGroup defaultActiveKey='#link1'>
				<ListGroup.Item
                    
					style={{
						textDecoration: todo.complete
							? 'line-through'
							: undefined,
                        cursor: 'pointer'
					}}
					onClick={() => {
						toggleTodo(todo);
					}}>
					{todo.text}
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};
