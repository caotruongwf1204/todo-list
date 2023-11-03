import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import "./List.css";
import { TodoContext } from "../Context/TodoContext";

const TodoList = () => {
 const { todos } = useContext(TodoContext);
  return (
    <div className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
