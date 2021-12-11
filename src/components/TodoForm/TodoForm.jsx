import React, { useState } from "react";

import "./TodoForm.css";

export function TodoForm({ addToDo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onWrite = (e) => {
    const value = e.target.value;

    setNewTodoValue(value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addToDo(newTodoValue);

    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <label className='form__label'>
        Escribe un nuevo TODO
        <textarea
          value={newTodoValue}
          onChange={onWrite}
          className='form__textarea'
          placeholder='¡Crea un nuevo TODO!'
          required
          maxLength='33'
        />
      </label>

      <div className='form__button-area'>
        <button
          className='form__button form__cancel-button'
          type='button'
          onClick={onCancel}>
          Cancelar
        </button>

        <button className='form__button form__add-button' type='submit'>
          Agregar
        </button>
      </div>
    </form>
  );
}
