import React, { useState } from "react";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [inputTextValue, setInputTextValue] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Form
        setInputTextValue={setInputTextValue}
        inputTextValue={inputTextValue}
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList todo={todo} />
    </>
  );
}

export default App;
