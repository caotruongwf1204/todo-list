import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Headers/Header";
import TodoList from "./Todolist/TodoList";
import TodoProvider, { TodoContext } from "./Context/TodoProvider";
import { useEffect, useState } from "react";

function App() {
  const [{ todos, loading, error }, setData] = useState({
    todos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("https://dummyjson.com/todos/user/1");

      if (!res.ok) {
        setData({
          todos: [],
          loading: false,
          error: "khong tai duoc du lieu san pham",
        });
      } else {
        const json = await res.json();
        console.log("Data from the API:", json);

        setData({
          todos: json.todos,
          loading: false,
          error: null,
        });
      }
    };

    getUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container">
      <TodoProvider>
        <Header></Header>
        <TodoList todos={todos}></TodoList>
        <Footer></Footer>
      </TodoProvider>
    </div>
  );
}

export default App;
