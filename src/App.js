import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import TodoContainer from './components/TodoContainer';
import ContactContainer from './components/ContactContainer';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false, createdAt: new Date() },
    { id: 2, text: 'Build Todo App', completed: false, createdAt: new Date() }
  ]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'incomplete') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route
            path="/todos"
            element={
              <TodoContainer
                todos={getFilteredTodos()}
                filter={filter}
                setFilter={setFilter}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            }
          />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/" element={<TodoContainer todos={getFilteredTodos()} filter={filter} setFilter={setFilter} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;