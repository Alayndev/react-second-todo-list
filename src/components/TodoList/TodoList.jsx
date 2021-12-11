import React from "react";
import "./TodoList.css";

// Render props: Recibimos e invocamos a las render props: onError - onLoading - onEmpty - - onEmptySearchResults - render
export function TodoList({
  children,
  error,
  loading,
  searchedToDos,
  totalTodosPROP,
  searchedText,

  onError,
  onLoading,
  onEmpty,
  onEmptySearchResults,
  render,
}) {
  const renderFunction = children || render;

  return (
    <>
      <section className='TodoList-container'>
        {error && onError()}

        {loading && onLoading()}

        {!loading && !totalTodosPROP && onEmpty()}

        {!!totalTodosPROP &&
          !searchedToDos?.length &&
          onEmptySearchResults(searchedText)}

        <ul className='list'>
          {searchedToDos.map((todo) => renderFunction(todo))}
        </ul>
      </section>
    </>
  );
}

