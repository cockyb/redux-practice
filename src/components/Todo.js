import React from 'react';
import cx from 'classnames';
import { toggleTodo } from "../redux/actions";
import { useDispatch } from 'react-redux'

const Todo = ({todo}) => {
  console.log(todo);
  const dispatch = useDispatch()
  return (
    <li className='todo-item' onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed ? '👌' : '👋'}
      {' '}
      <span
        className={cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed',
        )}
      >
        {todo.content}
      </span>
    </li>
  );
}

export default Todo;
