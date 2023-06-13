import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface Props {
	addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
	const [text, setText] = useState('');
	return (
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Add Todo</Form.Label>
					<Form.Control
						type='text'
                        value={text}
				        onChange={e => setText(e.target.value)}
						placeholder='Write something...'
					/>
				</Form.Group>
				<Button
                variant='primary'
				type='submit'
				onClick={e => {
					e.preventDefault();
					addTodo(text);
					setText('');
				}}>
				Add Todo
			</Button>
			</Form>
	);
};
