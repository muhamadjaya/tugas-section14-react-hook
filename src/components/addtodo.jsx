import React, { useState } from "react";

const AddTodo = ({ addTodoValue, fooAddTodo }) => {
  const [submits, setSubmits] = useState({
    defaultValue: "",
    value: addTodoValue,
  });

  const handleChange = (e) => {
    setSubmits({
      value: e.target.value,
    });
  };

  const clearInput = () => {
    document.getElementById("todoValue").value = "";

    setSubmits({ value: "" });
  };

  const addTodo = () => {
    fooAddTodo(submits.value);
    clearInput();
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="todoValue"
        placeholder="Add todo..."
        onChange={handleChange}
      />
      <div className="input-group-append groupAppend">
        <button
          onClick={addTodo}
          className="btn btnAdd"
          type="button"
          id="button-addon2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
