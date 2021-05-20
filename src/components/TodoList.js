import React from 'react';
import {useSelector} from 'react-redux';
import Todo from './Todo';
import {VISIBILITY_FILTERS} from '../constants';

const TodoList = () => {
  const visibilityFilter = useSelector((state) => {
    return state.visibilityFilter;
  });

  const todos = useSelector((state) => {
    const todosState = state.todos;
    const allTodos = state.todos.allIds.map((id) => {
      const todo = todosState.byIds[id];

      return {...todo, id};
    });
    switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
    }
  });

  return (
    <ul className="todo-list">
      {todos && todos.length ?
        todos.map((todo) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        }) :
        'No todos, yay!'}
    </ul>
  );
};

export default TodoList;
