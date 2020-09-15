import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './FormInput.css';

const Form = ({ addTodoHandler }) => {
  const ref = useRef(null);

  const onAddButtonHandler = event => {
    event.preventDefault();
    addTodoHandler(ref.current.value);
    ref.current.value = '';
  };

  return (
    <div className="container">
      <form className="row valign-wrapper">
        <div className="col m8 l8">
          <input ref={ref} type="text" placeholder="Write your TODO task" />
        </div>
        <div className="col m2 l2">
          <button
            className="waves-effect waves-light btn w100"
            type="submit"
            onClick={onAddButtonHandler}
          >
            <i className="small material-icons">playlist_add</i>
          </button>
        </div>
        <div className="col m2 l2">
          <label htmlFor="done-items">
            <input type="checkbox" id="done-items" />
            <span>Show complete</span>
          </label>
          <label htmlFor="undone-items">
            <input type="checkbox" id="undone-items" />
            <span>Show incomplete</span>
          </label>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  addTodoHandler: PropTypes.func,
};

export default Form;
