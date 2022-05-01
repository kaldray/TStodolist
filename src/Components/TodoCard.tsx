import { ReactComponent as Bin } from "../svg/bin.svg";

type Todo = {
  todo: string;
  setTodoToDelete: React.Dispatch<React.SetStateAction<string>>;
};

const TodoCard = ({ todo, setTodoToDelete }: Todo) => {
  const svgStyles = {
    cursor: "pointer",
  };

  const getTodo = () => {
    console.log(todo);
    setTodoToDelete(todo);
  };
  return (
    <>
      <div className="todo-card">
        <div>
          <p>{todo}</p> <Bin onClick={getTodo} style={svgStyles} />
        </div>
      </div>
    </>
  );
};

export default TodoCard;
