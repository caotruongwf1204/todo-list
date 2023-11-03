import React, { useContext } from "react";
import Button from "../All/Button";
import "./Actions.css";
import { TodoContext } from "../Context/TodoContext";

const Actions = () => {
  const { onMarkAll, onDeleteAllComple } = useContext(TodoContext);
  return (
    <div className="footer-column">
      <div className="todo-action">
        <div className="footer-heading">Quick actions</div>
        <Button onClick={onMarkAll}>Mark all todo compate</Button>
        <Button onClick={onDeleteAllComple}>Delete all todo completed</Button>
      </div>
    </div>
  );
};

export default Actions;
