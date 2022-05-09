import { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todoState } = useContext(TodoContext);
    const { todos } = todoState;

    useEffect(() => {
        localStorage.setItem('DATA', JSON.stringify(todoState));
    }, [todoState]);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
