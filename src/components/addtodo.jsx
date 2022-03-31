import React, { useState } from "react";

const Addtodo = ({ submitTodo }) => {
  const [submits, setSubmits] = useState("");

  const handleChange = (e) => {
    setSubmits(e.target.value);
  };

  const clearInput = () => {
    document.getElementById("title").value = "";
    setSubmits("");
  };

  const addTodo = () => {
    if (submits === "") {
      return alert("Add todo must be filled !");
    }
    submitTodo(submits);
    clearInput();
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="title"
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

export default Addtodo;
