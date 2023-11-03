import { createContext, useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";

import Header from "./Headers/Header";
import TodoList from "./Todolist/TodoList";
import { TodoContext } from "./Context/TodoContext";

function App() {
  const [state, setState] = useState({
    todos: [],
    filter: {
      status: "all",
      color: [],
    },
  });

  const addTodo = (content) => {
    const newTodo = {
      id: Date.now(),
      status: false,
      content,
      color: null,
    };

    setState((prev) => {
      return {
        ...prev,
        todos: [...prev.todos, newTodo],
      };
    });
  };

  const setFilter = (name, value) => {
    setState((prev) => {
      return {
        ...prev,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };
    });
  };

  const markAll = () => {
    if (confirm("Đánh dấu tất cả là hoàn thành"))
      setState((prev) => ({
        ...prev,
        todos: prev.todos.map((todo) => ({ ...todo, status: true })),
      }));
  };

  const deleteAllComple = () => {
    if (confirm("Xoas tất cả công việc đã hoàn thành"))
      setState((prev) => ({
        ...prev,
        todos: prev.todos.filter((todo) => !todo.status),
      }));
  };

  const deleteTodoById = (id) => {
    if (confirm("Xóa công việc"))
      setState((prev) => ({
        ...prev,
        todos: prev.todos.filter((todo) => todo.id !== id),
      }));
  };

  const markItem = (id) => {
    setState((prev) => ({
      ...prev,
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      ),
    }));
  };

  // lọc theo status
  let filterTodos =
    state.filter.status === "all"
      ? state.todos
      : state.filter.status === "completed"
      ? state.todos.filter((todo) => todo.status)
      : state.todos.filter((todo) => !todo.status);

  // lọc tiếp theo màu
  filterTodos =
    state.filter.color.length == 0
      ? filterTodos
      : filterTodos.filter((todo) => state.filter.color.includes(todo.color));

  //remaining
  const remaining = state.todos.filter((todo) => !todo.status).length;

  return (
    <div className="container">
      <TodoContext.Provider
        value={{
          onSubmit: addTodo,
          todos: filterTodos,
          onDelete: deleteTodoById,
          onMark: markItem,
          filter: state.filter,
          onFilter: setFilter,
          onMarkAll: markAll,
          onDeleteAllComple: deleteAllComple,
          remaining: remaining,
        }}
      >
        <Header></Header>

        <TodoList></TodoList>

        <Footer></Footer>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
