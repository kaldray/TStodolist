type Todo = {
  todo: string[];
};

const TodoCard = ({ todo }: Todo) => {
  return (
    <>
      <div className="todo-card">
        {todo && todo.map((todo, i) => <div key={i}>{todo}</div>)}
      </div>
    </>
  );
};

export default TodoCard;
