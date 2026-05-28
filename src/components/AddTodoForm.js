import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTodo(input);
    setInput('');
  };

  return (
    <div className="add-todo-form">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
          className="todo-input"
        />
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;