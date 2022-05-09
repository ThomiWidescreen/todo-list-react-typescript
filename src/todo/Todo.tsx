import { TodoProvider } from './context/TodoProvider';
import { TodoList } from './components/TodoList';
import { TodoTitle } from './components/TodoTitle';
import { TodoInput } from './components/TodoInput';
export const Todo = () => {
    return (
        <TodoProvider>
            <TodoTitle />
            <TodoList />
            <TodoInput />
        </TodoProvider>
    );
};
