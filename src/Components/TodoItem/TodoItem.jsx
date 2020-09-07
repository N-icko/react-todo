import React from "react";

const TodoItem = ({ item }) => {
  const onCompletedHandler = () => {};

  return (
    <div>
      <li>
        <p className={item.completed ? "completed" : ""}>{item.todoName}</p>
      </li>
      <button onClick={onCompletedHandler}>Complete</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
