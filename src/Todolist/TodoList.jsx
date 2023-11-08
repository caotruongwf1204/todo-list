import React from "react";
import TodoItem from "./TodoItem";
import "./List.css";

const TodoList = ({ todos }) => {
  
  return (
    <div className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item}></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;