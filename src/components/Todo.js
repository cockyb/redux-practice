import React from 'react';
import cx from 'classnames';

const Todo = ({ todo, toggleTodo }) => (
  <li className='todo-item' onClick={() => toggleTodo(todo.id)}>
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

export default Todo;
