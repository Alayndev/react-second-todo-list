import React from "react";
import "./TodoCounter.css";

export function TodoCounter({ completedTodos, totalTodosPROP, loading }) {
  return (
    <h2 className={`title ${loading && `title--loading`}`}>
      Has completado {completedTodos} de {totalTodosPROP} TODOs
    </h2>
  );
}
