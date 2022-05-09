import { TodoContext } from '../context/TodoContext';
import { useState, useContext, ChangeEvent } from 'react';

export const TodoInput = () => {
    const [newTodo, setNewTodo] = useState<string>('');
    const { addTodo, removeCompletedTodos } = useContext(TodoContext);

    const handleTypeText = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleNewTodoButton = () => {
        addTodo(newTodo);
        setNewTodo('');
    };

    const handleRemoveTodosButton = () => {
        removeCompletedTodos();
    };

    return (
        <>
            <input
                className='form-control'
                type='text'
                placeholder='Type a new todo, please'
                value={newTodo}
                onChange={handleTypeText}
            ></input>
            <button
                className='btn btn-primary mt-1 mr-1'
                onClick={handleNewTodoButton}
            >
                Add new todo
            </button>
            <button
                className='btn btn-danger mt-1 mr-1'
                onClick={handleRemoveTodosButton}
            >
                Remove completed todos
            </button>
        </>
    );
};
