import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo() {
  const [input, setInput] = useState('');

  //추가된 라인
  const dispatch = useDispatch()
  const updateInput = (e) => {
    setInput(e.target.value)
  };

  const handleAddTodo = () => {
    //리덕스 스토어로 보냅니다.
    dispatch(addTodo(input))
    setInput('')
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
