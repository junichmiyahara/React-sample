import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo1", completed: false }]);

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: "1", name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    // もし渡されたidとイコールならば
    const todo = newTodos.find((todo) => todo.id === id);
    // ここでチェックボックスの値を反転している
    todo.completed = !todo.completed;
    // ここで更新している
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
