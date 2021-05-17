import React, { useState } from 'react';

function AddTodo() {
  const [input, setInput] = useState('');
  const updateInput = (e) => {
    setInput(e.target.value)
  };

  const handleAddTodo = () => {
    //리덕스 스토어로 보냅니다.
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
