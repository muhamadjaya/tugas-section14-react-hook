import React from "react";

const Todo = ({ todo, handleComplete, handleDelete }) => {
  const checkComplete = () => {
    if (todo.completed)
      return (
        <s>
          <i>{todo.title}</i>
        </s>
      );
    else return todo.title;
  };

  return (
    <>
      <td style={{ width: 15 }} className="text-center">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => handleComplete(todo)}
        />
      </td>
      <td>{checkComplete()}</td>
      <td style={{ width: 100 }} className="text-center">
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Todo;
