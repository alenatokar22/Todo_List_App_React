import React, { useEffect } from "react";

const Form = ({ input, setInput, toDo, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    // console.log(`title=${title} id=${id} Compledet=${completed}`);

    const newtodo = toDo.map((item) =>
      item.id === id ? { title, id, completed } : item
    );

    // console.log(newtodo);

    setTodo(newtodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([
        ...toDo,
        { title: input, completed: false, id: "#" + toDo.length },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo ..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
