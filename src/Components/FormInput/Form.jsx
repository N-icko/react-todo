import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './FormInput.css';

function Form({ addTodoHandler, setFilter }) {
  const ref = useRef(null);

  function addButtonHandler(event) {
    event.preventDefault();
    addTodoHandler(ref.current.value);
    ref.current.value = '';
  }

  function filterHandler(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="container mt2 z-depth-1">
      <form className="row valign-wrapper">
        <div className="col m8">
          <input
            className="input"
            ref={ref}
            type="text"
            placeholder="Write your TODO task here..."
          />
        </div>
        <div className="col m2">
          <button
            className="waves-effect waves-light btn w100"
            type="submit"
            onClick={addButtonHandler}
          >
            <i className="small material-icons">playlist_add</i>
          </button>
        </div>
        <div className="col input-field m2">
          <select onChange={filterHandler} className="browser-default">
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  addTodoHandler: PropTypes.func,
  setFilter: PropTypes.func,
};

export default Form;
