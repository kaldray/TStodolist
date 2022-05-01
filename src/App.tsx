import { useState, useRef, useEffect } from "react";
import TodoCard from "./Components/TodoCard";

function App() {
  const [todo, setTodo] = useState<string[]>([]);
  const [todoToDelete, setTodoToDelete] = useState<string>("");
  let value = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let todoFromLocalStorage = localStorage.getItem("todo");
    if (typeof todoFromLocalStorage === "string") {
      setTodo(JSON.parse(todoFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("todo") !== "null") {
      deleteTodo();
    }
  }, [todoToDelete]);

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

  const deleteTodo = () => {
    let newLocalStrorage = todo.filter((todo) => {
      return todo !== todoToDelete;
    });
    localStorage.setItem("todo", JSON.stringify(newLocalStrorage));
    setTodo(newLocalStrorage);
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
        {todo &&
          todo.map((todo, i) => (
            <TodoCard
              key={i}
              todo={todo}
              setTodoToDelete={setTodoToDelete}
            />
          ))}
      </div>
    </>
  );
}

export default App;
