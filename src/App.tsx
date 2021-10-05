import Todos from "./components/Todos";
import NewTodos from "./components/NewTodo";
import TodosContextProvide from "./store/todos-conext";

function App() {
  return (
    <TodosContextProvide>
      <NewTodos />
      <Todos />
    </TodosContextProvide>
  );
}

export default App;
