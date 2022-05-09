import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
    const { todoState, toggleTodo, addTodo, removeCompletedTodo } =
        useContext(TodoContext);
    const { todos } = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter((todo) => !todo.completed),
        completedTodos: todos.filter((todo) => todo.completed),
        toggleTodo,
        addTodo,
        removeCompletedTodo,
    };
};
