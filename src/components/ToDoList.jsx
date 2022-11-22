const ToDoList = ({ toDo, setTodo, setEditTodo }) => {
  const handleComplete = ({ id }) => {
    setTodo(
      toDo.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = toDo.find((toDo) => toDo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodo(toDo.filter((toDo) => toDo.id !== id));
  };
  console.log(toDo);
  return (
    <div>
      {toDo.map((item, index) => (
        <li className="list-item" key={index}>
          <input
            type="text"
            value={item.title}
            className={`list ${item.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(item)}
            >
              <i className="fa fa-check-circle">
                <img src="src/assets/completed.svg" alt="completed" />
              </i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(item)}
            >
              <i className="fa fa-edit">
                <img src="src/assets/edit.svg" alt="edit" />
              </i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(item)}
            >
              <i className="fa fa-trash">
                <img src="src/assets/trash.svg" alt="delete" />
              </i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
