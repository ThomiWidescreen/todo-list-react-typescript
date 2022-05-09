import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [],
    completed: 0,
    pending: 0,
};

const localData = (): TodoState => {
    return JSON.parse(
        localStorage.getItem('DATA') || JSON.stringify(INITIAL_STATE)
    );
};

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const TodoProvider = (props: TodoProviderProps) => {
    const [todoState, dispatch] = useReducer(todoReducer, localData());

    const toggleTodo = (id: string) => {
        dispatch({
            type: 'toggleTodo',
            payload: { id },
        });
    };

    const addTodo = (newTodo: string) => {
        dispatch({
            type: 'addTodo',
            payload: {
                id: uuidv4(),
                desc: newTodo,
                created: new Date().toISOString().split('T')[0],
                completed: false,
            },
        });
    };

    const removeCompletedTodos = () => {
        dispatch({
            type: 'removeCompletedTodos',
        });
    };

    const removeCompletedTodo = (id: string) => {
        dispatch({
            type: 'removeCompletedTodo',
            payload: { id },
        });
    };

    return (
        <TodoContext.Provider
            value={{
                todoState,
                toggleTodo,
                addTodo,
                removeCompletedTodos,
                removeCompletedTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};
