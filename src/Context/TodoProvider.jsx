import { createContext, useReducer } from "react";
import { todoReducer } from "../reducer/TodoReducer";


export const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: {
      status: 'all',
      color: [],
  }
}

export default function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (content) => {
    dispatch({ type: "ADD_TODO", payload: { content } });
  };

  const setFilter = (name, value) => {
    dispatch({ type: "SET_FILTER", payload: { name, value } });
  };

  const markAll = () => {
    if (confirm("Đánh dấu tất cả là hoàn thành")) {
      dispatch({ type: "MARK_ALL" });
    }
  };

  const deleteAllComple = () => {
    if (confirm("Xoas tất cả công việc đã hoàn thành"))
      dispatch({ type: "DELETE_ALL" });
  };

  const deleteTodoById = (id) => {
    if (confirm("Xóa công việc"))
      dispatch({type: "DELETE_BY_ID", payload: {id}})
  };

  const markItem = (id) => {
    dispatch({type: "UPDATE_STATUS", payload: {id}})
  };

  // lọc theo status
  let filterTodos =
    state.filter.completed === "all"
      ? state.todos
      : state.filter.completed === "completed"
      ? state.todos.filter((todo) => todo.completed)
      : state.todos.filter((todo) => !todo.completed);

  // lọc tiếp theo màu
  filterTodos =
    state.filter.color.length == 0
      ? filterTodos
      : filterTodos.filter((todo) => state.filter.color.includes(todo.color));

  //remaining
  const remaining = state.todos.filter((todo) => !todo.status).length;

  return <TodoContext.Provider value={{
    onSubmit: addTodo,
    todos: filterTodos,
    onDelete: deleteTodoById,
    onMark: markItem,
    filter: state.filter,
    onFilter: setFilter,
    onMarkAll: markAll,
    onDeleteAllComple: deleteAllComple,
    remaining,
  }}
  >{children}</TodoContext.Provider>
};
