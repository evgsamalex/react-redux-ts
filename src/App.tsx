import React from "react";
import { TodoList } from "./components/TodoList";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "start", gap: "20px" }}
    >
      <UserList></UserList>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
