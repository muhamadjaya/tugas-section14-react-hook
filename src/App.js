import React from "react";
import "./App.css";
import Todolist from "./components/todolist";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">todos</h1>
      <Todolist />
    </div>
  );
};

export default App;
