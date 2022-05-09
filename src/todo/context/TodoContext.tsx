import { createContext } from 'react';
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState;
    addTodo: (todo: string) => void;
    toggleTodo: (id: string) => void;
    removeCompletedTodos: () => void;
    removeCompletedTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextProps>(
    {} as TodoContextProps
);
