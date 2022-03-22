import React from "react";

const Todo = ({ todo, fooDelete, fooDoneDone }) => {
  const checkTodo = () => {
    if (todo.completed)
      return (
        <s>
          <i>{todo.value}</i>
        </s>
      );
    else return todo.value;
  };

  return (
    <>
      <td style={{ width: 15 }} className="text-center">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => fooDoneDone(todo)}
        />
      </td>
      <td>{checkTodo()}</td>
      <td style={{ width: 100 }} className="text-center">
        <button
          onClick={() => fooDelete(todo.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Todo;
