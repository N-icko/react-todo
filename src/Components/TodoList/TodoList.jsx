import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, setTodo }) => {
  return (
    <ul>
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

export default TodoList;
