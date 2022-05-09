import { useTodos } from '../hooks/useTodos';
export const TodoTitle = () => {
    const { pendingTodos, completedTodos } = useTodos();

    return (
        <>
            <h1 className='font-weight-bold mt-5'>
                Pending Todos: {pendingTodos.length}, Completed:{' '}
                {completedTodos.length}{' '}
            </h1>
        </>
    );
};
