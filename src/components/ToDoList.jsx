import Completed from "../assets/completed.svg";
import Edit from "../assets/edit.svg";
import Trash from "../assets/trash.svg";

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
              <img src={Completed} alt="completed" />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(item)}
            >
              <img src={Edit} alt="edit" />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(item)}
            >
              <img src={Trash} alt="delete" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToDoList;
