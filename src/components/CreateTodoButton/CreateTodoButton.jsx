import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={onClickButton} className='add-todo'>
        +
      </button>
    </>
  );
}
