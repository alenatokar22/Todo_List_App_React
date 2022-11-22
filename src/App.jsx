import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  // const initialState = JSON.parse(localStorage.getItem("toDo")) || [];
  const initialState = [];
  //
  //
  const [input, setInput] = useState("");
  const [toDo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            toDo={toDo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <ToDoList toDo={toDo} setTodo={setTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
