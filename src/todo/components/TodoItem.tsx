import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface props {
    todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
    const { toggleTodo, removeCompletedTodo } = useTodos();

    const handleOnMouseEnter = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        e.currentTarget.classList.add('font-weight-bold');
    };

    const handleOnMouseLeave = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        e.currentTarget.classList.remove('font-weight-bold');
    };

    const handleOnClickXButton = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        removeCompletedTodo(e.currentTarget.id);
    };

    return (
        <>
            <li
                className={todo.completed ? 'text-success' : 'text-primary'}
                style={{
                    cursor: 'pointer',
                    userSelect: 'none',
                }}
                onClick={() => toggleTodo(todo.id)}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                {`${todo.desc} | Created at: ${
                    new Date(todo.created).toISOString().split('T')[0]
                }`}
            </li>
            <span className='right badge badge-success mr-1'>
                {todo.completed ? 'Completed' : ''}
            </span>
            <span
                id={todo.id}
                className='right badge badge-danger'
                onClick={handleOnClickXButton}
                style={{ cursor: 'pointer' }}
            >
                X
            </span>
        </>
    );
};
