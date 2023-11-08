import React, { useContext } from "react";
import Button from "../All/Button";
import "./Item.css";
import { TodoContext } from "../Context/TodoProvider";

const TodoItem = ({ todo }) => {
  const { onDelete, onMark } = useContext(TodoContext);
  return (
    <div className="todo-item">
      <div className="todo-main">
        <input
          className="status"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onMark(todo.id)}
        />
        <span className="content">{todo.todo}</span>
      </div>
      <div className="todo-actions">
        <div className="color-picker">Pick color</div>
        <Button onClick={() => onDelete(todo.id)}>X</Button>
      </div>
    </div>
  );
};

export default TodoItem;
