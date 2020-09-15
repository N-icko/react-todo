import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';

const TodoList = ({ todos }) => {
  const onCompleteHandler = () => {
  };
  return (
    <div className="todo-list container">
      <ul>
        {todos.map(item => (
          <li className="todo-item valign-wrapper row" key={item.id}>
            <div className="col s8 list-title">
              <span>{item.todoTitle}</span>
            </div>
            <div className="col s4 list-buttons">
              <button className="waves-effect waves-light btn" type="button" onClick={onCompleteHandler}>
                <i className="small material-icons">done</i>
              </button>
              <button className="waves-effect waves-light btn" type="button">
                <i className="small material-icons">delete</i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
};

export default TodoList;
