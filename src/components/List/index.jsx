import { useSelector } from "react-redux";
import todoReducer from "./../../redux/reducers/todoReducer";
import Card from "../Card";

const List = () => {
  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div className="mt-5">
      {todoState.todos.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
