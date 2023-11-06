import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Headers/Header";
import TodoList from "./Todolist/TodoList";
import TodoProvider, { TodoContext } from "./Context/TodoProvider";

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
