import { useContext } from "react";
import "./App.css";
import TodoProvider, { TodoContext } from "./Context/TodoProvider";
import Footer from "./Footer/Footer";
import Header from "./Headers/Header";
import TodoList from "./Todolist/TodoList";



function App() {
  

  return (
    <div className="container">
      <TodoProvider>
        <Header></Header>
        <TodoList></TodoList>
        <Footer></Footer>
      </TodoProvider>
    </div>
  );
}

export default App;
