import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';

function TodoList({ filter, deleteHandler, completeHandler, filteredTodos }) {

  return (
    <div className="container todo-main z-depth-1">
      {filteredTodos.length ? (
        <ul className="todo-list">
          {filteredTodos.map(item => (
            <li
              className={`list-item valign-wrapper row ${item.complete ? 'complete grey-text' : ''}`}
              key={item.id}
            >
              <span className="col s10 list-text">{item.todoTitle}</span>
              <div className="col s2 list-buttons center-align">
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
      ) : (
        <div>
          <h1 className="flow-text center-align">
            {`Sorry, your ${filter} todo list is empty!`}
          </h1>
        </div>
      )}
    </div>
  );
}

TodoList.propTypes = {
  filter: PropTypes.string,
  filteredTodos: PropTypes.arrayOf(PropTypes.object),
  deleteHandler: PropTypes.func,
  completeHandler: PropTypes.func,
};

export default TodoList;
