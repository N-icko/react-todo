import React, { useEffect, useState } from 'react';
import Form from './Components/FormInput/Form';
import TodoList from './Components/TodoList/TodoList';
import Header from './Components/Header/Header';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filter]);

  function addTodoHandler(title) {
    const newTodo = {
      todoTitle: title,
      id: Math.random() * 8,
      complete: false,
    };
    setTodos([newTodo, ...todos]);
  }

  function completeHandler(id) {
    setTodos(prevState =>
      prevState.map(item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      }),
    );
  }

  function deleteHandler(id) {
    setTodos(prevState => prevState.filter(el => el.id !== id));
  }

  function filterHandler() {
    switch (filter) {
      case 'complete':
        setFilteredTodos(todos.filter(item => item.complete === true));
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(item => item.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="main light-blue lighten-5">
      <Header />
      <Form
        addTodoHandler={addTodoHandler}
        setFilter={setFilter}
      />
      <TodoList
        filter={filter}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
