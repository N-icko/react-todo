import React, { useState } from 'react';
import Form from './Components/FormInput/Form';
import TodoList from './Components/TodoList/TodoList';
import { Header } from './Components/Header/Header';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = title => {
    const newTodo = {
      todoTitle: title,
      id: Math.floor(Math.random() * 8),
      complete: false,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="main indigo lighten-5">
      <Header />
      <Form addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
