import React from "react";

const Form = ({ inputTextValue, setInputTextValue, setTodo }) => {
  const onInputChangeHandler = (e) => {
    setInputTextValue(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodo((prevState) => [
      ...prevState,
      { todoName: inputTextValue, id: Math.random(), complete: false },
    ]);
    setInputTextValue("");
  };

  return (
    <>
      <input
        onChange={onInputChangeHandler}
        value={inputTextValue}
        type="text"
      />
      <button onClick={onClickHandler}>Add todo</button>
      <select name="" id="">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
    </>
  );
};

export default Form;
