import React from "react";
import "./App.css";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoSearch } from "../TodoSearch/TodoSearch";

import { useTodos } from "../../hooks/useTodos";

import { TodoHeader } from "../TodoHeader/TodoHeader";

import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";

import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodosError } from "../TodosError/TodosError";

import { StorageChangeAlertWithStorageListener } from "../StorageChangeAlert/StorageChangeAlert";

import { v4 as uuidv4 } from "uuid";
import { NoResults } from "../NoResults/NoResults";

function App() {
  const {
    loading,
    errorPROP,
    searchedToDos,
    completeToDo,
    deleteTodo,
    addToDo,
    openModal,
    setOpenModal,
    search,
    setSearch,
    totalTodosPROP,
    completedTodos,
    syncBrowsertab,
  } = useTodos(); // Destructuramos el return del Custom Hook useTodos(), objeto con todos los estados de la app (antiguo estado guardado en Provider value={{}} que consumiamos aquí con useContext() en 1er app)

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodosPROP={totalTodosPROP}
          completedTodos={completedTodos}
        />

        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>

      <StorageChangeAlertWithStorageListener syncBrowsertab={syncBrowsertab} />

      <TodoList
        error={errorPROP}
        loading={loading}
        searchedToDos={searchedToDos}
        totalTodosPROP={totalTodosPROP}
        searchedText={search}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearchResults={(searchedText) => (
          <NoResults searchedText={searchedText} />
        )}
        render={(todo) => (
          <TodoItem
            key={uuidv4()}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}>
        {(todo) => (
          <TodoItem
            key={uuidv4()}
            number={uuidv4()}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addToDo={addToDo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
