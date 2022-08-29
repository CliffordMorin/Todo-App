import "./todoForm.css";
import { useState, useEffect } from "react";
import List from "./List";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const TodoForm = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <div className="listContainer">
      <header className="listHeader">My Todo List</header>
      <div className="listBackground">
        <div className="listShape"></div>
        <div className="listShape"></div>
      </div>

      <form className="form">
        {open ? (
          <div className="newPostContainer">
            <input
              type="text"
              className="todoInput"
              maxLength="25"
              minLength="1"
              placeholder="What do you need to do?"
              value={inputText}
              onChange={inputTextHandler}
            />
            <button
              className="saveButton button"
              type="submit"
              onClick={(e) => {
                setOpen(!open);
                submitTodoHandler(e);
              }}
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <button
          className="newButton button"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <div className="todoListContainer">
          <ul className="todoList">
            {todoList.map((todo) => (
              <List
                todoList={todoList}
                setTodoList={setTodoList}
                key={todo.id}
                text={todo.text}
                inputTextHandler={inputTextHandler}
                inputText={inputText}
                submitTodoHandler={submitTodoHandler}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};
export default TodoForm;
