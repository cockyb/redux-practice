import React, { useState } from 'react';

function AddTodo() {
  const [input, setInput] = useState('');
  const updateInput = () => {
  };

  const handleAddTodo = () => {
  };

  return (
    <div>
      <input
        onChange={(e) => updateInput(e.target.value)}
        value={input}
      />
      <button type='button' className='add-todo' onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
