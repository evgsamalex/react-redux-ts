import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    state => state.todo
  );

  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  const setPage = (page: number) => {
    setTodoPage(page);
  };

  if (loading) {
    return <div>Загрузка списка дел</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "3px" }}>
        {pages.map(p => (
          <div
            key={p}
            onClick={() => {
              setTodoPage(p);
            }}
            style={{
              border: p === page ? "2px solid green" : "1px solid grey",
              width: "30px",
              textAlign: "center",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
