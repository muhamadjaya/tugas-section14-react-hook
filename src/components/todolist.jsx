import React, { useState } from "react";
import Todo from "./todo";
import AddTodo from "./addtodo";

const Todolist = () => {
  const [inputs, setInputs] = useState({
    addTodoValue: "",
    todos: [
      {
        id: 1,
        value: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: 2,
        value: "Mengerjakan Assignment",
        completed: false,
      },
      {
        id: 3,
        value: "Membuat Resume",
        completed: false,
      },
    ],
  });

  const getTime = () => {
    let d = new Date();
    var n = d.getTime();
    return n;
  };

  const handleDelete = (todo) => {
    const todos = inputs.todos.filter((t) => {
      return t.id !== todo;
    });
    setInputs({ todos });
  };

  const handleDone = (todo) => {
    const todos = [...inputs.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setInputs({ todos });
  };

  const addNewTodo = (value) => {
    if (value) {
      const todos = [...inputs.todos];
      todos.push({
        id: getTime(),
        value: value,
        completed: false,
      });
      setInputs({ addTodoValue: "", todos });
    } else {
      alert("Please Add Todo Text");
      console.log("Please Add Todo Text");
    }
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <td colSpan="4" className="text-center">
            <AddTodo
              fooAddTodo={addNewTodo}
              addTodoValue={inputs.addTodoValue}
            />
          </td>
        </tr>
        {inputs.todos.map((todo, index) => (
          <tr key={todo.id}>
            <Todo
              index={index + 1}
              todo={todo}
              fooDelete={handleDelete}
              fooDoneDone={handleDone}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todolist;
