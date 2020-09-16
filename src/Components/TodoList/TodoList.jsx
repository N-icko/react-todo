import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';

const TodoList = ({ deleteHandler, completeHandler, filteredTodos }) => {
  return (
    <div className="todo-list container">
      <ul>
        {filteredTodos.map(item => (
          <li
            className={`todo-item valign-wrapper row ${item.complete ? 'complete grey-text' : ''}`}
            key={item.id}
          >
            <div className="col s8 list-title">
              <span className="list-text">{item.todoTitle}</span>
            </div>
            <div className="col s4 list-buttons">
              <button
                className={`waves-effect waves-light btn ${item.complete ? 'complete grey-text' : ''}`}
                type="button"
                onClick={() => {
                  completeHandler(item.id);
                }}
              >
                <i className="small material-icons">done</i>
              </button>
              <button
                className={`waves-effect waves-light btn ${item.complete ? 'complete grey-text' : ''}`}
                type="button"
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
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
  filteredTodos: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func,
  completeHandler: PropTypes.func,
};

export default TodoList;
