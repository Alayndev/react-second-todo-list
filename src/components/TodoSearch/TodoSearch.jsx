import React from "react";
import "./TodoSearch.css";

export function TodoSearch({ search, setSearch, loading }) {
  return (
    <div className='todoSearch'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        className='todoSearch__input'
        placeholder='Buscar ToDo'
        value={search}
        disabled={loading}
      />
    </div>
  );
}
