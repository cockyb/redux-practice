import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions';

function AddTodo() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div>
      <input
        onChange={updateInput}
        value={input}
      />
      <button type='button' className='add-todo' onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
