import { useState, useRef, useEffect } from "react";
import TodoCard from "./Components/TodoCard";

function App() {
  const [todo, setTodo] = useState<string[]>([]);
  let value = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let todoFromLocalStorage = localStorage.getItem("todo");
    if (typeof todoFromLocalStorage === "string") {
      setTodo(JSON.parse(todoFromLocalStorage));
    }
  }, []);

  const addTodo = () => {
    if (value.current !== null && value.current.value !== "") {
      let arrOfTodo: string[] = [...todo, value.current.value];
      console.log("ok");
      console.log(arrOfTodo);
      let todoLocalStrorage = localStorage.getItem("todo");
      console.log(todoLocalStrorage);
      localStorage.setItem("todo", JSON.stringify(arrOfTodo));
      setTodo(arrOfTodo);
      value.current.value = "";
    }
  };
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <input ref={value} type="text" />
        <button onClick={addTodo} type="submit">
          Ajouter
        </button>
      </div>
      <div className="todolist-container">
        <TodoCard todo={todo} />
      </div>
    </>
  );
}

export default App;
