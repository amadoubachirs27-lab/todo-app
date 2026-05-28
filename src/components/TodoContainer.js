import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import FilterButtons from './FilterButtons';

function TodoContainer({ todos, filter, setFilter, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-page">
      <div className="todo-content">
        {/* Left Column: Todo List */}
        <div className="todo-list-section">
          <h2>My Tasks</h2>
          <FilterButtons filter={filter} setFilter={setFilter} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>

        {/* Right Column: Add Todo Form */}
        <div className="add-todo-section">
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;